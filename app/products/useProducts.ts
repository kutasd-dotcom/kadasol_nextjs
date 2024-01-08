'use client'

import { useEffect, useState } from "react";

export type ProductsType = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

const useProducts = () => {
    const [prods, setProds] = useState<ProductsType[]>([])
    const [productToShow, setProductToShow] = useState<ProductsType>({} as ProductsType)

    const getData = async () => {
        const url = "https://dummyjson.com/products"
        const response = await fetch(url);
        const respInJson = await response.json()
        setProds(respInJson.products)

    }
    useEffect(() => {
        getData()
    }, [])

    return { prods, productToShow, setProductToShow }

}

export default useProducts