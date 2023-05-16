import service from "../axios";

export const acquireTimeline = async () => {
    return await service.get(
        "/timeline/acquire"
    );
}