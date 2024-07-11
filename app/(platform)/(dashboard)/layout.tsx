import { Toaster } from "sonner";
import { NavBar } from "./_components/navbar";

const DashboardLayout = ({children} :
    { children:React.ReactNode} ) => { return (
        <>
        
             <Toaster  richColors/>
            <div className="h-full">
            <NavBar/>

            {children}
        </div>
        </>
    );


};

export  default DashboardLayout;
