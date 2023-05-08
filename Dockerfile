FROM node:18.16-alpine AS builder

WORKDIR /app

## Copies everything over to Docker environment
COPY . .

# Installs all node packages
RUN npm config set registry https://registry.npm.taobao.org && npm install && npm run build --production


# 构建最终镜像
FROM node:18.16-alpine

WORKDIR /app

COPY --from=builder /app/build /app/build

RUN npm config set registry https://registry.npm.taobao.org && npm install -g serve

# 删除除了build目录以外的所有文件和目录 # Install `serve` to run the application.
#RUN find . -maxdepth 1 ! -path "./build" -exec rm -r {} \; && npm install -g serve

# Uses port which is used by the actual application
EXPOSE 3000

# Run application
#CMD [ "npm", "start" ]
CMD ["serve", "-s", "build"]
