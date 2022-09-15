import React from "react";
import Link from 'next/link';

export const AvoCard = ({ product }: { product: TProduct }) => {

    const id = product.id;
    
    return(
        <Link href={`/product/${id}`}>
            <div className="border-2 rounded-md cursor-pointer hover:scale-[1.05] hover:drop-shadow-md ease-linear duration-200" >
                <img 
                    src={product.image}
                    className="w-72 h-auto border-b"
                />
                <div className="px-5 py-2">
                    <p className="font-bold">{product.name}</p>
                    <p className="font-light text-md text-[15px]">{product.price}</p>
                </div>
            </div>
        </Link>
    )
}