import Link from 'next/link';
import localFont from "next/font/local";
import { Poppins } from 'next/font/google';
import { Medal } from "lucide-react";

import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

import Image from 'next/image'

const headingFont = localFont({
    src: "../../public/fonts/kontora-black.otf"
});


const textFont = Poppins ( {
    subsets: ['latin'],
    weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    ]
});
const MarketinPage = () => {

    return(
        <div>
        <div className="flex flex-col md:flex-row items-center justify-center mx-24 "> 
    
        <div className="w-[700px] h-[700px] max-lg:hidden ">

       <Image
      src="/img/1.png"
      width={1600}
      height={1600}
      alt="girl" />  
            </div>
         
         
        <div className={cn(
            "flex items-end max-lg:mt-16 max-lg:items-center flex-col",
            headingFont.className
        )}>
        <div className="text-xs lg:text-xs mb-2 flex items-center border shadow-sm p-2
        bg-amber-100 text-amber-700 rounded-full uppercase">

        <Medal className="  h-5 w-5 mr-2 md:h-6 md:w-6"/>
        1 NUMARALI İŞ TAKİP UYGULAMASI
        </div>


        <h1 className="max-w-2xl max-lg:text-center xl:text-6xl md:max-w-xl text-5xl md:text-4xl text-end mb-3 text-neutral-800">
        Görevin uygulaması işlerin takibine
        </h1>
        <div>
            <div className="text-3xl md:text-4xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 p-4 rounded-md pb-4 w-fit"> yardımcı olur!</div>
        </div>
        <div className={cn(
            "xl:text-xl text-sm md:text-sm max-lg:text-center text-neutral-400 mt-12 max-w-lg md:max-w-2xl text-end ",
            textFont.className,
            )}>
        İşbirliği yapın, projeleri yönetin ve yeni üretkenlik zirvelerine ulaşın. Gökdelenlerden ev ofislerine kadar, takımınızın çalışma şekli benzersizdir - hepsini İş Takip ile başarın.

        </div>

        <Button className="mt-6" size="lg" asChild>
            <Link href="/sign-up">
         Ücretsiz Edinin
            </Link>
        </Button>

        </div>

        </div>
            <div className='mx-96 flex flex-col items-center justify-center text-center'>
            </div>
          
           
           {/* Gradient Background*/}
        <div className="blob w-[950px] h-[800px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r
         from-indigo-200 via-purple-200 to-pink-200 "> </div>
        <div className="blob w-[1100px] h-[1100px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r
         from-red-200 via-gray-50 to-blue-100 "> </div>
         </div>
    );
};

export default MarketinPage;