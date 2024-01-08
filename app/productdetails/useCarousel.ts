import { useEffect, useRef, useState } from "react"

export default function useCarousel() {
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)


    useEffect(() => {
        let elem = carouselRef.current as unknown as HTMLDivElement
        let { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    return {
        currentImg, setCurrentImg, carouselSize, carouselRef
    }
}