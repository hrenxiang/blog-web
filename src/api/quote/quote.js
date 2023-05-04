import axios from "axios";

// 中文语录
const CHINESE_QUOTE= "https://v1.hitokoto.cn/";
// 英文语录
// const ENG_QUOTE = "https://api.quotable.io/random";
// 中文诗词
// const CHINESE_POETRY= "https://v2.jinrishici.com/one.json";

// 随机获取名人名言
export const acquireQuote = async () => {
    return await axios.get(CHINESE_QUOTE);
}

