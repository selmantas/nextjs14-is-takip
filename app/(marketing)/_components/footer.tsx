import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {


    return (
        <div className="fixed p-4  bottom-0 w-full flex  border-t bg-slate-100">
        <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo/> 

        <div className="space-x-4 md:block  md:w-auto flex items-center
    justify-between w-full ">
    
    <Button size="sm" variant="ghost">
            Gizlilik Politikası
        </Button>

        <Button size="sm" variant="ghost">
            Kullanım Şartları
        </Button>

    </div>

        </div>

    
     
        </div>


    );
};