import service from "../axios";

export const acquireDocumentData = async (pageNum, pageSize) => {
    return await service.post(
        "/document/acquire",
        {
                "page_num": pageNum,
                "page_size": pageSize
              }
    );
}