'use client'

import { usePathname, useSearchParams } from "next/navigation"

const Cart = () => {

    const pathName = usePathname();
    const searchParams = useSearchParams();


    console.log("searchParams", searchParams.get('search'));

    return (
        <div>
            <h1>This is Cart page</h1>
        </div>
    )
}

export default Cart