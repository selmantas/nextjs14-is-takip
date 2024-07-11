import { z } from "zod";

export const CreateBoard = z.object( {
    title: z.string({
        required_error: "Başlık Gerekli",
        invalid_type_error: " Başlık Gerekli ",
    }).min(3, {
        message: "Başlık Çok Kısa"
    }),

    image: z.string({
        required_error: "Image is reqired",
        invalid_type_error: "Resim Seçmediniz"

    }),



});