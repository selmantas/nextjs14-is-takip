"use client";

import { toast } from "sonner";
import { deleteBoard } from "@/actions/delete-board";
import { useAction } from "@/hooks/use-action";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { MoreHorizontal, Trash2, X } from "lucide-react";

interface BoardOptionsProps {

    id:string;
};

export const BoardOptions = ( { id }: BoardOptionsProps ) => {
    const { execute, isLoading } = useAction(deleteBoard, {

        onError: (error) => {
            toast.error(error);

        }
    });

    const onDelete = ( ) => {


        execute ( { id });
    };



    return (

        <Popover>
           <PopoverTrigger asChild>
                <Button className="h-auto w-auto p-2 " variant="transparent">
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
        </PopoverTrigger>
        <PopoverContent className="px-0 pt-3 pb-3"
        side="bottom"
        align="start"
        
        >
            <div className="text-sm font-medium text-center text-neutral-600 ">
                Pano İşlemleri
            </div>
            <PopoverClose asChild>
            <Button
            variant="ghost"
            className="h-auto w-auto absolute p-2 top-2
            right-2 text-neutral-600">
                <X className="h-4 w-4"/>
            </Button>
            
            </PopoverClose>
            <Button 
            variant="ghost"
            onClick={onDelete}
            disabled={isLoading}
            className="rounded-none w-full h-auto p-2 px-5 justify-start
            font-normal text-sm"
            
            >
                <Trash2 className="mr-2 h-4 w-4"/>
                Panoyu sil
            </Button>

            
        </PopoverContent>
        
        </Popover>
    );
};