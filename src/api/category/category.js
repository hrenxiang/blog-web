import axios from "../axios";

export const acquireSubcategoryAndBlogNum = async () => {
    return await axios.get('/subcategory/acquire');
}