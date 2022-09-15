import React from "react";
import axios from "axios";
import useSWR, { SWRConfig } from 'swr'
import Avocado from "@components/SVGIcons/Avocado";
import Link from "next/link";
import { AvoCard } from "@components/AvoCard";


const fetcher = (url) => axios.get<TAPIAvoResponse>(url).then((res) => res.data);
const API = "https://platzi-avos-app.vercel.app/api/avo";


export const getServerSideProps = async () => {
    const data = await fetcher(API);
    return {
        props: {
            fallback: {
                [API]: data
            }
        }
    }
}


const Home = ({ fallback }) => {
    const { data , error } = useSWR(API);
    const {data: productList} = data;

    if (error) return <div className="h-[90vh] flex items-center justify-center text-2xl font-bold">Error fetching data...</div>
    if (!data) return <div className="h-[90vh] flex items-center justify-center text-2xl font-bold">loading...</div>


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
                    {!!productList &&  productList?.map((product, index) => (
                        <AvoCard product={product} key={product.name} />
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Home;