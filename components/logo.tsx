import Link from "next/link";
import Image from "next/image";

export const Logo =() => {

    return (    

        <Link href="/">

        <div className="hover:opacity-65 transition items-center gap-x-2 hidden md:flex" >
        <Image        
        src="/logo.svg"
        alt="Logo"
        height={40}
        width={140}

        />
        </div>

        </Link>

    );

};