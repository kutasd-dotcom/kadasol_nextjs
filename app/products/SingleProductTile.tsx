import Image from "next/image";
import Link from "next/link";
import path from "path";
import React, { Dispatch, SetStateAction } from "react";
import { ProductsType } from "./useProducts";

type SinglePRoductProps = {
    product: ProductsType
    setProductsToShow: Dispatch<SetStateAction<ProductsType>>
}

export const SingleProduct = (props: SinglePRoductProps): JSX.Element => {
    const { product, setProductsToShow } = props;
    const { thumbnail, price, title, description, discountPercentage } = product
    return (
        <div className="relative w-[309px] h-[320px]">
            <div className="flex flex-col w-[305px] h-[320px] bg-white rounded-[6.458px] border-[0.65px] border-[#dadada]">
                <Image
                    className="w-[290px] h-[200px] mt-2 self-center rounded-md"
                    alt="Image"
                    src={thumbnail}
                    width={100}
                    height={100}
                />
                <div className="ml-2 mt-2 mr-2 justif-self-end flex  gap-3 justify-between" >
                    <div className="font-bold basis-40  text-[#313131] whitespace-nowrap text-ellipsis overflow-hidden">
                        {title}
                    </div>
                    <div className="font-bold basis-33 text-[#313131] justify-self-end whitespace-nowrap">
                        {`${price} $`}
                    </div>
                </div>
                <p className="ml-2 w-[194px] font-medium text-[#313131] text-[14px] whitespace-nowrap text-ellipsis overflow-hidden">
                    {description}
                </p>
                <div className="self-center mt-2 w-[284px] justify-center h-[41px]">
                    <button className="left-[36px] font-normal text-white text-[16px] tracking-[0] leading-[normal]" onClick={() => setProductsToShow(product)}>
                        <div className="flex items-center justify-center  w-[282px] h-[41px] bg-black rounded-[25.83px]">
                            See details
                        </div>
                    </button>
                </div >
            </div>
            <div className="absolute w-[85px] h-[30px] top-[20px] left-[202px]">
                <div className="flex justify-center align-middle bg-[#6000ff] rounded-[13.877px]">
                    <div className=" w-auto font-normal text-white ">
                        {`-${discountPercentage}%`}
                    </div>
                </div>
            </div>
        </div >
    );
};
