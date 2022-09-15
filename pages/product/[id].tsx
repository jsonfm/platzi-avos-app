import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";

import { GetStaticPaths, GetStaticProps } from 'next'

const fetcher = (url) => axios.get<TProduct>(url).then((res) => res.data);
const API = "https://platzi-avos-app.vercel.app/api/avo";


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://platzi-avos-app.vercel.app/api/avo')
    const { data }: TAPIAvoResponse = await response.json()
    const paths = data.map(({ id }) => ({ params: { id } }))

    return {
      paths,
      fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const response = await fetch(
        `https://platzi-avo.vercel.app/api/avo/${params?.id}`
      )
      const product = await response.json()
      return { props: { product } }
    
}

const ProductId = ({ product }: {product: TProduct}) => {
    const router = useRouter();
    const id = router.query.id;

    if(!id)
        return <div className="min-h-screen w-[70%] mx-auto">None</div>

    return(
        <section className="container-lg lg:w-[70%] mx-auto min-h-screen">
            <div className="flex flex-col px-4 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row md:px-12">
                    <img
                        src={product.image}
                        className="h-80"
                    />
                    <div className="flex flex-col">
                        <p className="mt-2 font-semibold text-xl md:mt-24">{product.name}</p>
                        <p>{product.price.toFixed(2)}</p>
                        <div className="mt-2 py-1 bg-zinc-200 max-w-[180px] h-8 flex items-center justify-center text-base rounded">SKU: {product.sku}</div>
                    </div>
                </div>

                <p className="mt-6 font-bold text-xl mb-4">About this Avocato</p>
                <p>{product.attributes.description}</p>

                <table className="border-collapse border border-slate-200 rounded-md mt-6">
                    <thead>
                        <tr>
                            <th colSpan={2} className="border border-slate-200 bg-gray-100  py-2 text-start px-2">Attributes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-200 py-2 px-2">Shape</td>
                            <td className="border border-slate-200 py-2 px-2">{product.attributes.shape}</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 py-2 px-2">Hardiness</td>
                            <td className="border border-slate-200 py-2 px-2">{product.attributes.hardiness}</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 py-2 px-2">Taste</td>
                            <td className="border border-slate-200 py-2 px-2">{product.attributes.taste}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}


export default ProductId;