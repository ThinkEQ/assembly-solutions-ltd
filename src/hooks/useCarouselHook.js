import { useContext, useEffect, useState } from 'react'
import { CarouselContext } from 'pure-react-carousel'

export function useCarouselContext() {
    const carouselContext = useContext(CarouselContext)
    const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)

    function changeSlide(value) {
        return carouselContext.setStoreState({ currentSlide: value})
    }

    useEffect(() => {
        function onChange() {
            setCurrentSlide(carouselContext.state.currentSlide)
        }
        carouselContext.subscribe(onChange)
        return () => carouselContext.unsubscribe(onChange)
    }, [carouselContext])


    return [currentSlide, changeSlide]
}
