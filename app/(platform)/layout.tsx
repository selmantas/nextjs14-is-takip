import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { trTR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";

import { deflate } from "zlib";


const localization = 

{   
signIn: {

    start: {
        title: "Giriş Yap",
        subtitle: " Giriş Yapmak için lütfan alttaki kısımları dolsurunuz",

    }},

organizationProfile: {
    profilePage: {
        dangerSection: {
            title: "Hayat"

    }
  } },
signUp: {


}

}


const PlatformLayout = ( {children} : { children: React.ReactNode;} ) => {

    return (
        
        <ClerkProvider  localization = {trTR} >
            <QueryProvider>
                  <ModalProvider/>
                  {children}
            </QueryProvider>
         </ClerkProvider>

        
    );
};


export default PlatformLayout;