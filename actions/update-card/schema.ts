import { z } from "zod";


export const UpdateCard = z.object({
    boardId: z.string(),
    description: z.optional(
        z.string({
            required_error: "Açıklama gerekli",
            invalid_type_error: " Açıklama gerekli"
        }). min(3, {
            message: "Açıklama çok kısa"
        }),
    ),
    title: z.optional( 
        z.string({
        required_error: "Lütfen başlık girin",
        invalid_type_error: "Lütfen başlık girin",


            }).min(3, {
                message: "Başlık çok kısa",
            })
    ),
    id: z.string(),

});