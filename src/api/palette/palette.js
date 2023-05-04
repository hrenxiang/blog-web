import service from "../axios";

export const acquirePaletteData = async () => {
    return await service.get(
        "/palette/acquire"
    );
}