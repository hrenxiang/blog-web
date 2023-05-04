import service from "../axios";

export const acquireNavData = async () => {
    return await service.get("/nav/acquire");
}