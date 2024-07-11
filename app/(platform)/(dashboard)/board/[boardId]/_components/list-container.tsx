"use client";
import { ListWithCards } from "@/types";
import { List } from "@prisma/client";
import { ListForm } from "./list-form";
import { useEffect, useState } from "react";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import { ListItem } from "./list-item";

import { useAction } from "@/hooks/use-action";
import { updateListOrder } from "@/actions/update-list-order";
import { updateCardOrder } from "@/actions/update-card-order";

import { toast } from "sonner";

interface ListContainerProps {
    data: ListWithCards[];
    boardId: string;


};

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


export const ListContainer = ({
    data,
    boardId,

}: ListContainerProps) => {
    const [orderedData, setOrderedData] = useState(data);


    const {execute: executeUpdateListOrder} =useAction(updateListOrder, {
        onSuccess: () => {
            toast.success("Liste yeniden sıralandı");
        },
        onError: (error) => {
            toast.error(error);
        },

    });

    const {execute: executeUpdateCardOrder} =useAction(updateCardOrder, {
        onSuccess: () => {
            toast.success("Kart yeniden sıralandı");
        },
        onError: (error) => {
            toast.error(error);
        },

    });




    useEffect(()=> {
        setOrderedData(data);
    }, [data]);

    const onDragEnd = (result: any ) => {
        const {destination, source, type} = result;
        
        if (!destination) {

            return;
        }

        // if Dropped in the same position => Aynı pozisyona bırakıldığında
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        //User moves a list => Kullanıcı bir listeyi hareket ettiriyor

        if (type == "list") {
            const items = reorder(
                orderedData,
                source.index,
                destination.index,

            ).map((item,index) => ({...item, order: index}));

            setOrderedData(items);
           
        // TODO: Tringger Server Action => YAPILACAK: Sunucu Eylemini Tetikle
            executeUpdateListOrder({ items, boardId});

        }

        //user moves a card => kullanıcı bir kartı hareket ettiriyor
        if (type === "card") {

            let newOrderedData = [...orderedData];

            //Source and destination list => Kaynak ve hedef liste
            const sourceList = newOrderedData.find(list => list.id === source.droppableId);
            const  destList = newOrderedData.find(list => list.id === destination.droppableId);

            if (!sourceList || !destList) {
                return;
            }
        
            // Check if card exist on the sourceList => Kartın kaynak listede olup olmadığını kontrol et
            if (!sourceList.cards) {
                sourceList.cards = [];
            }

            //Check if cards exists on the destList => Kartların hedef listede olup olmadığını kontrol et
            if (!destList.cards) {
                destList.cards = [];
            } 

            // Moving the card in the same list => Kartı aynı listede taşıma
            if (source.droppableId === destination.droppableId) {
                const reorderedCards = reorder(
                    sourceList.cards,
                    source.index,
                    destination.index,
                );

            reorderedCards.forEach((card, idx)=> {
                card.order = idx;
            });

            sourceList.cards = reorderedCards;

            setOrderedData(newOrderedData);
            //TODO: Trigger Server Action => TODO: Sunucu Eylemi Tetikle
            executeUpdateCardOrder({
                boardId: boardId,
                items: reorderedCards,
            });
            
            //User moves the card to another list => Kullanıcı kartı başka bir liste taşıyor
            } else {    
            // Remove  card from the source list => Kaynak listeden kartı kaldır
            const [movedCard] = sourceList.cards.splice(source.index, 1);

            // Assign the new listId to the moved card => Taşınan kartın yeni listId'sini atayın
            movedCard.listId = destination.droppableId;

            //Add card to the destiantion list => Kartı hedef listeye ekleyin
            destList.cards.splice(destination.index, 0, movedCard);
            
            sourceList.cards.forEach((card, idx)=> {
                card.order=idx;
            });

            // Update  the order for each card in the destination list => Hedef listedeki her kartın sırasını güncelleyin
            destList.cards.forEach((card, idx)=>{
                card.order = idx;
            });


            setOrderedData(newOrderedData);

            //TODO: Trigger Server Action, => TODO: Sunucu Eylemi Tetikle
            executeUpdateCardOrder({
                boardId: boardId,
                items: destList.cards,
            });
        
        }





        }

    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="lists" type="list" direction="horizontal">
            {(provided) => (

        <ol

        {...provided.droppableProps}
        ref={provided.innerRef}
        className=" flex gap-x-3 h-full"
        
        > 
            {orderedData.map((list, index)=> {
                return (
                    <ListItem
                    key={list.id}
                    index={index}
                    data={list}
                    />
                )
            })}
            {provided.placeholder}
            <ListForm/>
            <div className="flex-shrink-0 w-1"/>
        </ol>
        )}
        
        </Droppable>
        </DragDropContext>
    )


}