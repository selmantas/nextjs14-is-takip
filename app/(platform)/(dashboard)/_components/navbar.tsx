import { FormPopover } from "@/components/form/form-popover";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
export const  NavBar = () => {

    return ( 
        <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b
        shadow-sm bg-white flex items-center">
          <MobileSidebar/>
        <div className="flex items-center gap-x-5">
            <div className="hidden md:flex">
        <Logo/>
            </div>
        <FormPopover align="start" side="bottom" sideOffset={18}>
        <Button variant="primary" size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2" > 
        Oluştur

        </Button>
        </FormPopover>
        <FormPopover>
        <Button variant="primary" size="sm" className="rounded-sm block md:hidden">
        <Plus className="h-4 w-4"/>
        </Button>
        </FormPopover>
        </div>
     <div className="ml-auto flex items-center gap-x-2 ">
         <OrganizationSwitcher
         hidePersonal
         afterCreateOrganizationUrl="/organzation/:id"
         afterLeaveOrganizationUrl="/select-org"
         afterSelectOrganizationUrl="/organization/:id"
         appearance={{
            elements: {
                rootBox: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                },

            },
         }}
         />
         <UserButton 
         afterSignOutUrl="/"
         appearance={{
            elements: {
                avatarBox: {
                    height:35,
                    width:35,
                },

            },

         }}
         
         />
     </div>
        </nav>
    );
};