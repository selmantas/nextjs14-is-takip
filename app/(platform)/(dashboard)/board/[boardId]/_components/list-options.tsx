"use client";

import { List } from "@prisma/client";

import {

    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,

} from "@/components/ui/popover";

import { useAction } from "@/hooks/use-action";
import { deleteList } from "@/actions/delete-list";
import { Button } from "@/components/ui/button";
import { Copy, MoreHorizontal, SquarePlus, Trash2, X } from "lucide-react";
import { FormSubmit } from "@/components/form/form-submit";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { ElementRef, useRef } from "react";
import { copyList } from "@/actions/copy-list";

interface ListOptionsProps {
    data: List;
    onAddCard: () =>  void;
};

export const ListOptions = ({
    data,
    onAddCard,

}: ListOptionsProps) => {
    const closeRef = useRef<ElementRef<"button">>(null);

    const { execute: executeDelete } = useAction(deleteList, {
        onSuccess: (data) => {
            toast.success(`Liste "${data.title}" silindi`);
            closeRef.current?.click();

        },
        onError: (error) => {
            toast.error(error);
        }
    });


    const { execute: executeCopy } = useAction(copyList, {
        onSuccess: (data) => {
            toast.success(`Liste "${data.title}" kopyalandı`);
            closeRef.current?.click();

        },
        onError: (error) => {
            toast.error(error);
        }
    });


    const onDelete = (formData: FormData) => {

        const id = formData.get("id") as string;
        const boardId = formData.get("boardId") as string;

        executeDelete({ id, boardId});

    };

    const onCopy = (formData: FormData) => {

        const id = formData.get("id") as string;
        const boardId = formData.get("boardId") as string;

        executeCopy({ id, boardId});

    };


    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="h-auto w-auto p-2" variant="ghost">
                    <MoreHorizontal className="h-4 w-4"/>


                </Button>
        </PopoverTrigger>
        <PopoverContent className="px-0 pt-3 pb-3" side="bottom"
        align="start">

            <div className="text-sm font-medium text-center text-neutral-600
            pb-4 ">

                Liste Aktiviteleri
            </div>
            <PopoverClose ref={closeRef} asChild>
               <Button
                className="h-auto w-auto p-2 absolute top-2 right-2
                text-neutral-600"
                variant="ghost"
                >
                <X className="h-4 w-4"/>
                
                </Button> 

            </PopoverClose>
            <Button
            onClick={onAddCard}
            className="rounded-none w-full h-auto p-2 px-4 justify-start
            font-normal text-sm"
            variant="ghost"
            > 
            
            <SquarePlus className="mr-2 h-4 w-4"/>
             Kart Ekle...
            </Button>
            <form action={onCopy}>
                <input hidden name="id" id="id" value={data.id}/>
                <input hidden name="boardId" id="boardId" value={data.boardId}/>

                <FormSubmit
                variant="ghost"
                className="rounded-none w-full h-auto p-2 px-4 justify-start
                 font-normal text-sm"


                
                >
                <Copy className="mr-2 h-4 w-4"/>  
               Listeyi Kopyala...
                </FormSubmit>

            </form>
           <Separator />

           
           <form action={onDelete}>
                <input hidden name="id" id="id" value={data.id}/>
                <input hidden name="boardId" id="boardId" value={data.boardId}/>

                <FormSubmit
                variant="ghost"
                className="rounded-none w-full h-auto p-2 px-4 justify-start
                 font-normal text-sm"


                
                >
                <Trash2 className="mr-2 h-4 w-4"/> 
               Listeyi Sil...
                </FormSubmit>

            </form>
        </PopoverContent>
        </Popover>
    );

};