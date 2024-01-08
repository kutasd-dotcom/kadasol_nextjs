import { ProductsType } from "@/products/useProducts"
import { User } from "firebase/auth"
import CartElem from "./CartElem"
import Image from "next/image"

type CartPropsType = {
    productsInCart: ProductsType[],
    setCartContent: Function
}
const Cart = (props: CartPropsType) => {
    const { productsInCart, setCartContent } = props

    const handleDeleteElem = (id: number) => {
        const newContent = productsInCart.filter((elem => elem.id !== id))
        setCartContent([...newContent])
    }

    const content = productsInCart.map((prod, ind) => {
        return (
            <div className="flex justify-between" key={"elem" + prod.id}>
                <CartElem key={"elem" + prod.id} product={prod} />
                <button onClick={() => handleDeleteElem(prod.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                </button>
            </div>
        )
    })


    return <div className="p-5 w-5/6 border border-black rounded-md flex flex-col gap-3">
        {productsInCart.length > 0 ? content : <>
            <div>
                Your cart is empty
            </div>
        </>}
    </div>

}


export default Cart