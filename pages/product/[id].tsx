import React from "react";
import { useRouter } from "next/router";


const ProductId = () => {
    const router = useRouter();
    return(
        <section className="text-xl font-bold">
            Your product is: {router.query.id}
        </section>
    );
}


export default ProductId;