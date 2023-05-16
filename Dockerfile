FROM node:18.16-alpine AS builder

WORKDIR /app

# 复制所有资源到docker环境
COPY . .

# 安装依赖
RUN npm config set registry https://registry.npm.taobao.org && npm install && npm run build --production

# 构建最终镜像
FROM node:18.16-alpine

# 最终镜像工作目录
WORKDIR /app

# 复制所需资源
COPY --from=builder /app/build /app/build

#安装serve服务
RUN npm config set registry https://registry.npm.taobao.org && npm install -g serve

# 删除除了build目录以外的所有文件和目录 并安装serve服务
#RUN find . -maxdepth 1 ! -path "./build" -exec rm -r {} \; && npm install -g serve

# 使用3000端口
EXPOSE 3000

# 运行服务
#CMD [ "npm", "start" ]
CMD ["serve", "-s", "build"]
