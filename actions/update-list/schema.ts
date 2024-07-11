import { z } from "zod";


export const UpdateList = z.object({
    title: z.string({
        required_error: "Lütfen başlık girin",
        invalid_type_error: "Lütfen başlık girin",


    }).min(3, {
        message: "Başlık çok kısa",
    }),
    id: z.string(),
    boardId: z.string(),

});