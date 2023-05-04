import axios from "../axios";

// 每日一文
const CHINESE_ARTICLE= "https://interface.meiriyiwen.com/article/random?dev=1";

// 随机获取名人名言
export const acquireArticle = async () => {
    return await axios.get(CHINESE_ARTICLE);
}