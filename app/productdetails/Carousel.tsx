// carousel.tsx
"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import useCarousel from './useCarousel'

const Carousel = ({ images }: {
    images: string[]
}) => {
    const { currentImg, setCurrentImg, carouselRef, carouselSize } = useCarousel()

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex'>
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
                >
                    {"<"}
                </button>
                <div className='w-80 h-60 rounded-md overflow-hidden relative'>
                    <div
                        ref={carouselRef}
                        style={{
                            left: -currentImg * carouselSize.width
                        }}
                        className='w-full h-full absolute flex transition-all duration-300'>
                        {images.map((v, i) => (
                            <div key={i} className='relative shrink-0 w-full h-full'>
                                <Image
                                    className='pointer-events-none'
                                    alt={`carousel-image-${i}`}
                                    fill
                                    src={v}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    disabled={currentImg === images.length - 1}
                    onClick={() => setCurrentImg(prev => prev + 1)}
                    className={`px-4 py-2 font-bold ${currentImg === images.length - 1 && 'opacity-50'}`}
                >
                    {">"}
                </button>
            </div >
            <div className='flex justify-center'>
                {images.map((_, i) => {
                    return (
                        <span key={i} className={`h-[10.972px] w-[10.972px] rounded-[50%] inline-block m-2 ${currentImg === i ? "bg-purple-500" : "bg-purple-200"} `} >
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel