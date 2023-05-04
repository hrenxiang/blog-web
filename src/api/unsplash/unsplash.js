import axios from "axios";

const API_URL = 'https://api.unsplash.com';
const IMAGES_URL = 'https://images.unsplash.com/';
const ACCESS_TOKEN = 'cNqUFkkZcby8fkXLUrm-H5ericWkMcWZ5eXeC-lRE64';

const unsplashAPI = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Client-ID ${ACCESS_TOKEN}`,
    },
});

export const fetchImages = async (currentPage, perPage) => {
    return await unsplashAPI.get(`/photos?page=${currentPage}&per_page=${perPage}`);
}


export const isLikeImage = (isLiked, id) => {
    // 如果用户已经点赞，则取消点赞；否则添加点赞
    if (isLiked) {
        return unsplashAPI.post(`/photos/${id}/like`);
    } else {
        return unsplashAPI.delete(`/photos/${id}/like`)
    }
};

export const downloadImage = async (imageUrl) => {
    await axios({
        method: "get",
        url: imageUrl,
        responseType: "blob"
    }).then(response => {
        console.log(imageUrl)
        let split = imageUrl.split(IMAGES_URL)[1];
        let filename = split.split("?")[0];
        let url = window.URL.createObjectURL(response.data);
        let link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename + '.jpeg')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    })
}
