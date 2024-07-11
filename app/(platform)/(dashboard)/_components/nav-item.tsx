"use client"

import { useRouter, usePathname } from "next/navigation";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
    Activity,
    CreditCard,
    Layout,
    Settings,
    icons,
}   from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";



export  type Organization = {

    id:string;
    slug:string;
    imageUrl: string;
    name: string;
    

};



interface NavItemProps {
    isExpanded: boolean;
    isActive: boolean;
    organization:Organization;
    onExpand: (id:string) => void;
};

export const NavItem = ( {
    isExpanded,
    isActive,   
    organization,
    onExpand,
} : NavItemProps ) => {
    const  router = useRouter();
    const pathname = usePathname();

    const routes = [
        {
            label: "Panolar",
            icon: <Layout className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}`,
        },

        {
            label: "Aktivite",
            icon: <Activity className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}/activity`,
        },
        
        {
            label: "Ayarlar",
            icon: <Settings className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}/settings`,
        },

        {
            label: "Ücretlendirme",
            icon: <CreditCard className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}/billing`,
        },

    ];

    const onClick = (href: string )=> 
        { router.push(href);

    };

    return (

        <AccordionItem 
        value={organization.id}
        className="border-none"
        >
            <AccordionTrigger 
            onClick={()=> onExpand(organization.id)}
            className={cn( 
                "flex items-center gap-x-2 p-1.5 text-neutral-700   hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
                isActive && !isExpanded && "bg-emerald-400/10 text-emerald-600"
            )}
            
            >
                <div className=" flex items-center gap-x-2">
                <div className="w-7 h-7 relative"> 
                
                 <Image
                fill
                src={organization.imageUrl}
                alt="Organization"
                className ="rounded-sm object-cover" 
                />
                </div>
                <span className="font-medium text-sm">
                  {organization.name}

                </span>
                </div>

            </AccordionTrigger>
            <AccordionContent className="pt-1 text-neutral-700">
            {routes.map((route) => (
                    
                    <Button
                    key={route.href}
                    size="sm"
                    onClick = {() => onClick(route.href)}
                    className={cn(
                        "w-full font-normal justify-start pl-10 mb-1",
                        pathname === route.href && "bg-emerald-600/10 text-emerald-600"
                    )}

                    variant= "ghost"
                    > 
                    {route.icon}
                    {route.label}
                    </Button>


            ) )}
            </AccordionContent>

        </AccordionItem>

    );
};

NavItem.Skeleton = function SkeletonNavItem () {
    return (
        <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 relative shrink-0"    >
            <Skeleton className="h-full w-full absolute"/>
            </div>
            <Skeleton className="h-10 w-full"/>
        </div>


    );
};