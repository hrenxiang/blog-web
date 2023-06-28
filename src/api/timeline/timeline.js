import service from "../axios";

export const acquireTimeline = async (pageNum, pageSize) => {
    return await service.post(
        "/timeline/acquire",
        {
            "page_num": pageNum,
            "page_size": pageSize
        }
    );
}