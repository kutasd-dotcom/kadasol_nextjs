'use client'

import { SingleProductDetails } from "@/productdetails/SingleProductDetails";
import useProducts, { ProductsType } from './products/useProducts';
import { SingleProduct } from './products/SingleProductTile';
import { useState } from 'react';
import { auth } from "../lib/firebase-config";
import Cart from "./productdetails/Cart";

export default function Products() {
  const { prods, productToShow, setProductToShow } = useProducts();
  const [cartContent, setCartContent] = useState<ProductsType[]>([])
  const [inCart, setInCart] = useState<boolean>(false)
  const currentUser = auth.currentUser

  const contents = () => {
    if (productToShow.id && !inCart) {
      return (
        <div className="flex content-center justify-center p-20">
          <SingleProductDetails
            productToShow={productToShow}
            currentUser={currentUser}
            cartContent={cartContent}
            setCartContent={setCartContent} />
        </div>
      )
    } else if (inCart) {
      return (
        <div className="flex content-center justify-center p-20">
          <Cart productsInCart={cartContent} setCartContent={setCartContent} />
        </div>
      )
    }

    return (
      <div className="flex flex-col items-center">
        <div className="top-[49px] text-[#313131] text-[48px] font-bold">
          See Products
        </div>
        <div className=" w-[1268px] h-[320px] flex gap-2 flex-wrap">
          {
            prods.map((prod) => {
              return (
                <SingleProduct
                  key={prod.id}
                  product={prod}
                  setProductsToShow={setProductToShow}
                />
              )
            })
          }
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='p-[20px] flex bg-[#6100FF] text-white text-3xl justify-between rounded-bl-lg rounded-br-lg'>
        <button onClick={() => {
          setInCart(false)
          setProductToShow({} as ProductsType)
        }}>
          Products
        </button>
        <button onClick={() => { setInCart(true) }}>
          <div className='flex justify-around'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path>
            </svg>
            {cartContent.length}
          </div>
        </button >
      </div >
      {contents()}
    </>
  )
}


