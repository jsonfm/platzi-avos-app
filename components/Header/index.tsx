import Avocado from "@components/SVGIcons/Avocado";
import Basket from "@components/SVGIcons/Basket";
import Link from "next/link";
import React from "react";


const Header = () => {
    return(
        <header className="w-full h-16 border-b-2 border-stone-300">
            <nav className="w-full md:w-[70%] container-lg h-full mx-auto flex items-center justify-between pr-5 lg:px-0">
                <div className="relative bg-gray-300/50 h-full flex items-center px-5">
                <Link href="/">
                    <a className="flex items-center">
                        <Avocado />
                        Avo Store
                    </a>
                </Link>
                <div className="absolute -bottom-[0.35rem] inset-x-1/2 -translate-x-1/2 rotate-45 w-[10px] h-[10px] border-b-2 border-r-2 border-stone-300 bg-gray-200"></div>
                </div>
                <Link href="/about">
                    <a className="flex items-center gap-2">
                        <Basket />
                        Canasta
                    </a>
                </Link>
            </nav>
        </header>
    );
}


export { Header };