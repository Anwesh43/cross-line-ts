import {useState, useEffect, CSSProperties} from 'react'

const scGap : number = 0.02 
const delay : number = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {

        }
    })
    return {
        w,
        h, 
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const x = w / 2
    const y = h / 2
    const size = Math.min(w, h) / 10 
    return {
        crossStyle(i : number) : CSSProperties {
            const ah : number = size * Math.sin(scale * Math.PI)
            const top = `${y - ah / 2}px`
            const left = `${x - Math.min(w, h) / 180}px`
            const height = `${ah}px`
            const width = `${Math.min(w, h) / 90}px`
            const transform = `rotate(${90 * i + 45}deg)`
            const background = 'indigo'
            return {
                position, 
                top, 
                left, 
                width, 
                height, 
                transform,
                background 
            }
        },
        buttonStyle() : CSSProperties {
            const left = `${w * 0.35}px`
            const top = `${h * 0.8}px`
            return {
                position, 
                left, 
                top 
            }
        }
    }
}