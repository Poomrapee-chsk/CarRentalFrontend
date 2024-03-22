import { useState, useEffect } from "react"

export default function useWindowListener(eventType:string, listener:EventListener) {
    const [winWidth, setWinWidth] = useState(0)

    useEffect(() => {
        window.addEventListener(eventType, listener);   
    
        //Cleanup function
        return () => {
            window.removeEventListener(eventType, listener)
        }
    }, [])
}