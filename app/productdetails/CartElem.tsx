import { ProductsType } from "@/products/useProducts"
import Image from "next/image"

type CartElemProps = {
    product: ProductsType,

}
const CartElem = ({ product }: CartElemProps) => {
    const { title, price, thumbnail, description, discountPercentage } = product

    return <>
        <div className="basis-50">
            <div className="bg-gray-200 w-[1050px] pl-10 pr-10 pt-5 pb-5 rounded-md">
                <div className="flex gap-3 justify-between content-center items-center">
                    <Image
                        className="w-[290px] h-[200px] mt-2  rounded-md"
                        alt="Image"
                        src={thumbnail}
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <div className="font-bold basis-10  text-[#313131] whitespace-nowrap overflow-hidden">
                            {title}
                        </div>
                        <p className="w-[194px] font-medium text-[#313131] text-[14px]">
                            {description}
                        </p>
                    </div>

                    <div className="font-bold basis-33 text-[#313131] justify-self-end whitespace-nowrap flex-col">
                        <div className="text-black line-through">
                            {`${Math.floor(price * ((100 + discountPercentage) / 100))} $`}
                        </div>
                        <div>

                            {`${price} $`}
                        </div>
                    </div>
                    <div className=" w-[85px] h-[30px] top-[20px] left-[202px]">
                        <div className="flex justify-center align-middle bg-[#6000ff] rounded-[13.877px]">
                            <div className=" w-auto font-normal text-white ">
                                {`-${discountPercentage}%`}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    </>
}

export default CartElem