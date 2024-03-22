'use client'
import { useEffect, useRef } from "react"
import { useState } from "react"
import useWindowListener from "@/hooks/useWindowListener"

export default function VlogPlayer({vdoSrc, isPlaying}:{vdoSrc:string, isPlaying: boolean}) {
    
    const videoRef = useRef<HTMLVideoElement>(null)
    
    useEffect(() => {
        //alert('width is' + videoRef.current?.videoWidth)
        if (isPlaying) {
            videoRef.current?.play();
        }
        else {
            videoRef.current?.pause();
        }
    }, [isPlaying])

    useWindowListener("resize", (e) => {
        alert('window with is ' + (e.target as Window).innerWidth)
    });
    
    return (
        <video className="w-[40%]" src={vdoSrc} ref={videoRef} controls loop muted/>
    )
}