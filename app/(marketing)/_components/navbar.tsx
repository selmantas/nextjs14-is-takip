import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavBar = () => {


    return (    
        <div className="fixed top-0 w-full h-16 px-4 border-b border-slate-300/60 bg-[white]/60 backdrop-blur-[12px] flex items-center">
        <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo/> 

        
    <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full ">
    
    <Button className="border-teal-600 text-teal-600 bg-color-none hover:bg-teal-none  hover:text-teal-500  hover:border-teal-500" size="sm" variant="outline" asChild>
        <Link href="/sign-in"> Giriş Yap </Link>
        </Button>

        <Button size="sm" asChild>
            <Link href="/sign-up"> Ücretsiz Kayıt Ol </Link>
        </Button>

    </div>

        </div>

     
        </div>


    );
};