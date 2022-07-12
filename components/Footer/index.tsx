    import Link from "next/link";
    import React from "react";

    const Footer = () => {
        return(
            <footer className="w-full min-h-32 bg-stone-50 pt-3 pb-6 mt-10">
            <div className="container-lg md:w-[70%] mx-auto h-full grid md:grid-cols-2  lg:grid-cols-3 gap-3 py-6 px-6 lg:px-0">
                <div>
                        <p className="font-bold">Nosotros</p>
                        <ul className="text-blue-400 font-medium">
                            <li>
                                <Link href="/about">
                                    <a>Cónoce más</a>
                                </Link>
                            </li>
                        </ul>
                </div>
                <div>
                        <p className="font-bold">Servicios</p>
                        <ul className="text-blue-400 font-medium">
                            <li>
                                <p>Todos los productos</p>
                            </li>
                        </ul>
                </div>
                <div>
                        <p className="font-bold">Realizado Para</p>
                        <ul className="text-blue-400 font-medium">
                            <li>
                                <p>Platzi y su cruso de Nexts</p>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="text-center w-full mt-5">
                    <p className="text-[11px]">Icons made by Freepik from www.flaticon.com</p>
                    <p className="text-[11px]">Avocado images taken from Avocado 101 at California Avocado</p>
            </div>
            </footer>
        )
    }

    export { Footer };