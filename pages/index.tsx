import React from "react";
import axios from "axios";
import useSWR, { Fetcher } from 'swr'
import Avocado from "@components/SVGIcons/Avocado";
import Link from "next/link";


const Home = () => {
    const fetcher = url => axios.get<TAPIAvoResponse>(url).then(res => res.data)
    const { data: response , error } = useSWR('api/avo', fetcher)

    if (error) return <div className="h-[90vh] flex items-center justify-center text-2xl font-bold">Error fetching data...</div>
    if (!response) return <div className="h-[90vh] flex items-center justify-center text-2xl font-bold">loading...</div>
    const productList: TProduct[] = response.data;

    return(
        <section className="text-xl font-bold flex justify-center">
            <div className="container-lg">
                <div className="flex flex-col items-center pt-10 pb-12">
                    <p className="flex text-4xl font-bold">Platzi <Avocado className="avo-animation"/> Avo</p>
                    <Link href="/about">
                        <a className="text-md text-blue-500 mt-2">¿Debería comer un <b className="text-gray-500">Avo</b> hoy?</a>
                    </Link>
                </div>
                <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-3">
                {productList?.length > 0 &&  productList.map((product, index) => (
                    <div className="border-2 rounded-md cursor-pointer hover:scale-[1.05] hover:drop-shadow-md ease-linear duration-200" key={`avo-${index}`}>
                        <img 
                            src={product.image}
                            className="w-72 h-auto border-b"
                        />
                        <div className="px-5 py-2">
                            <p className="font-bold">{product.name}</p>
                            <p className="font-light text-md text-[15px]">{product.price}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}


export default Home;