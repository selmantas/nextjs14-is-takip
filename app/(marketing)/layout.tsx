import { Footer } from "./_components/footer";
import { NavBar } from "./_components/navbar";

const MarketingLayout = ( {children} : 

    { children: React.ReactNode}
) => {
return (

    <div className="h-full ">
        <NavBar/>
    <main className="pt-10 pb-20 ">
    {children}   
    </main>
    <Footer/>
    
    </div>

);

};

export default MarketingLayout;