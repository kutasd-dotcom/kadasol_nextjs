/* eslint-disable react/no-unescaped-entities */
import { ProductsType } from "@/products/useProducts";
import React from "react";
import Carousel from "./Carousel";
import { User } from "firebase/auth";
import SignIn from "@/auth/signIn";

type SingleProductDetailsProps = {
    productToShow: ProductsType,
    currentUser: User | null,
    cartContent: ProductsType[],
    setCartContent: Function
}

export const SingleProductDetails = (prop: SingleProductDetailsProps): JSX.Element => {
    const { productToShow, currentUser, cartContent, setCartContent } = prop
    const { signIn } = SignIn()

    const { title, description, stock, brand, category, price, discountPercentage, images, rating } = productToShow

    const handleAddToCart = () => {
        if (currentUser) {
            setCartContent([...cartContent, productToShow])
        } else {
            openModal('modelConfirm')
        }
    }

    const starsToShow = [...Array(5)].map((_, i) => {
        return (
            <svg key={`carousel-${i}`} className={`w-4 h-4 ms-1 self-center ${i <= rating ? "text-purple-500" : "text-gray-400"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20" >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        )
    })


    const openModal = (modalId: string) => {
        const elem = document.getElementById(modalId)
        if (elem) {
            elem.style.display = 'block'
        }
        document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
    }

    const closeModal = (modalId: string) => {
        const elem = document.getElementById(modalId)
        if (elem) {
            elem.style.display = 'none'
        }
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
    }




    return (
        <>

            <div className="bg-neutral-100 self-center p-20">
                <div className="flex flex-row">
                    <div className="self-center">
                        {<Carousel images={images} />}
                    </div>
                    <div className="flex-col place-content-between justify-between">
                        <div className="flex justify-between">
                            <div className="font-normal text-[#313131] text-[48px] tracking-[0] flex-wrap">
                                {title}
                            </div>
                            <div className="flex flex-row justify-between gap-1">
                                {starsToShow}
                                <div className="self-center text-nowrap font-bold" >{rating}</div>
                            </div>
                        </div>
                        <p className="font-medium text-black text-2xl tracking-[0] leading-[normal]">
                            {description}
                        </p>
                        <div className="  font-medium text-[#00000099] text-[24px] tracking-[0] leading-[normal]">
                            {`Stock: ${stock}`}
                        </div>
                        <div className="text-nowrap font-medium text-[#00000099] text-[24px] tracking-[0] leading-[normal]">
                            {`Brand: ${brand}`}
                        </div>
                        <div className="font-medium text-[#00000099] text-[24px] tracking-[0] leading-[normal]">
                            {`Category: ${category}`}
                        </div>
                        <div className="flex mt-4 w-20 justify-center bg-[#6000ff] rounded-lg">
                            <div className="font-normal text-white">
                                {`-${discountPercentage}%`}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="font-normal text-[#313131] text-[64px]">
                                {`${price} $`}
                            </div>
                            <div className="h-10 w-40 flex self-center justify-center content-center  bg-black rounded-lg text-white">
                                <button data-modal-target="authentication-modal" className="text-white self-center justify-self-center" onClick={() => handleAddToCart()}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modelConfirm" className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
                <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
                    <div className="flex justify-end p-2">
                        <button onClick={() => closeModal('modelConfirm')} type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 pt-0 text-center">
                        <svg className="w-20 h-20 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">You have to be logged in to put products in the cart.</h3>
                        <a href="#" onClick={() => signIn()}
                            className="text-white bg-purple-600 hover:bg-purple-400 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                            Log in
                        </a>
                        <a href="#" onClick={() => closeModal('modelConfirm')}
                            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                            data-modal-toggle="delete-user-modal">
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
            <div id="authDialog" className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
                <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
                    <div className="flex justify-end p-2">
                        <button onClick={() => closeModal('modelConfirm')} type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 pt-0 text-center">
                        <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">You have to be logged in to put products in the cart.</h3>
                        <a href="#" onClick={() => closeModal('modelConfirm')}
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                            Yes, I'm sure
                        </a>
                        <a href="#" onClick={() => closeModal('modelConfirm')}
                            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                            data-modal-toggle="delete-user-modal">
                            No, cancel
                        </a>
                    </div>

                </div>
            </div>
        </>
    )

};
