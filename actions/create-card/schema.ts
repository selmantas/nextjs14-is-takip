import { z } from "zod";


export const CreateCard = z.object({
    title: z.string({
        required_error: "Lütfen başlık girin",
        invalid_type_error: "Lütfen başlık girin",


    }).min(3, {
        message: "Başlık çok kısa",
    }),
    boardId: z.string(),
    listId: z.string(),



});

