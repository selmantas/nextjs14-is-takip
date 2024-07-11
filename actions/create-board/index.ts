"use server";

import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

import { InputType, ReturnType } from "./types";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";



const handler = async (data: InputType): Promise <ReturnType> => {

    const {userId, orgId} = auth();


    if (!userId || !orgId) {
        return {

        error:"Yetkisiz",

        };

    }

    const {title, image} = data;

    const [
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUserName

    ] = image.split("|");


    if  (!imageId || !imageThumbUrl || !imageFullUrl || !imageUserName ||
        !imageLinkHTML) {
            return {
                error: "Eksik dosyalar. Pano oluşturulamadı"
            };
        }
    
        
    let board;

    try {
        board = await db.board.create({

            data: {
                title,
                orgId,
                imageId,
                imageThumbUrl,
                imageFullUrl,
                imageLinkHTML,
                imageUserName,
            }
        });

        await createAuditLog({
            entityTitle: board.title,
            entityId: board.id,
            entityType: ENTITY_TYPE.BOARD,
            action: ACTION.CREATE,
        });

    } catch ( error ) {
        return {
            error: "Oluşturulamadı"
        }
    }

        revalidatePath(`/board/${board.id}`);
        return { data: board};
};

export const createBoard = createSafeAction(CreateBoard, handler);