'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ThreeDMarquee } from './3dMarquee'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxBackground() {
    const marqueeRef = useRef(null)

    const images = [
        "https://media.istockphoto.com/id/1313285963/vector/cyber-security-technology-concept-shield-with-keyhole-icon-personal-data.jpg?s=612x612&w=0&k=20&c=f5EIvVfgFJz5NR7SEp7v6npNQn9Dsx6MkYk7wcAF9Lo=",
        "https://c4.wallpaperflare.com/wallpaper/243/410/334/java-minimalism-wallpaper-preview.jpg",
        "https://t4.ftcdn.net/jpg/02/34/44/19/360_F_234441954_UBLcJTnihXXonXiR0kvToWLAm4OeoL89.jpg",
        "https://i.pinimg.com/736x/fd/09/94/fd099408f7d2823899b828cda6a13dc9.jpg",
        "https://play.vsthemes.org/frame/15/8215.webp",
        "https://img.freepik.com/premium-photo/ai-artificial-intelligence-cloud-computing-networks-concept-businesswoman-using-mobile-phone_666034-604.jpg",
        "https://img.freepik.com/premium-vector/abstract-artificial-intelligence-cloud-computing-machine-learning-technology-web-background-virtual-concept-futuristic-background_118331-1428.jpg?w=360",
        "https://img.freepik.com/premium-photo/creative-digital-cloud-computing-backdrop-cloud-data-service-concept-3d-rendering_670147-7742.jpg",
        "https://t4.ftcdn.net/jpg/04/38/93/15/360_F_438931535_DhZaUQHbGvGUxLzPNzT4inocmtABLBoO.jpg",
        "https://t4.ftcdn.net/jpg/04/72/18/19/360_F_472181971_ZCXWPAgsA2Yp6kEUhkSQDLvLvGuLhZxW.jpg",
        "https://static.vecteezy.com/system/resources/previews/025/255/729/non_2x/connected-lines-and-dots-big-data-visualization-global-network-connection-digital-communication-technology-concept-background-illustration-vector.jpg",
        "https://media.istockphoto.com/id/1313285963/vector/cyber-security-technology-concept-shield-with-keyhole-icon-personal-data.jpg?s=612x612&w=0&k=20&c=f5EIvVfgFJz5NR7SEp7v6npNQn9Dsx6MkYk7wcAF9Lo=",
        "https://c4.wallpaperflare.com/wallpaper/243/410/334/java-minimalism-wallpaper-preview.jpg",
        "https://t4.ftcdn.net/jpg/02/34/44/19/360_F_234441954_UBLcJTnihXXonXiR0kvToWLAm4OeoL89.jpg",
        "https://i.pinimg.com/736x/fd/09/94/fd099408f7d2823899b828cda6a13dc9.jpg",
        "https://play.vsthemes.org/frame/15/8215.webp",
        "https://img.freepik.com/premium-photo/ai-artificial-intelligence-cloud-computing-networks-concept-businesswoman-using-mobile-phone_666034-604.jpg",
        "https://img.freepik.com/premium-vector/abstract-artificial-intelligence-cloud-computing-machine-learning-technology-web-background-virtual-concept-futuristic-background_118331-1428.jpg?w=360",
        "https://img.freepik.com/premium-photo/creative-digital-cloud-computing-backdrop-cloud-data-service-concept-3d-rendering_670147-7742.jpg",
        "https://t4.ftcdn.net/jpg/04/38/93/15/360_F_438931535_DhZaUQHbGvGUxLzPNzT4inocmtABLBoO.jpg",
        "https://t4.ftcdn.net/jpg/04/72/18/19/360_F_472181971_ZCXWPAgsA2Yp6kEUhkSQDLvLvGuLhZxW.jpg",
        "https://static.vecteezy.com/system/resources/previews/025/255/729/non_2x/connected-lines-and-dots-big-data-visualization-global-network-connection-digital-communication-technology-concept-background-illustration-vector.jpg",
        "https://media.istockphoto.com/id/1313285963/vector/cyber-security-technology-concept-shield-with-keyhole-icon-personal-data.jpg?s=612x612&w=0&k=20&c=f5EIvVfgFJz5NR7SEp7v6npNQn9Dsx6MkYk7wcAF9Lo=",
        "https://c4.wallpaperflare.com/wallpaper/243/410/334/java-minimalism-wallpaper-preview.jpg",
        "https://t4.ftcdn.net/jpg/02/34/44/19/360_F_234441954_UBLcJTnihXXonXiR0kvToWLAm4OeoL89.jpg",
        "https://i.pinimg.com/736x/fd/09/94/fd099408f7d2823899b828cda6a13dc9.jpg",
        "https://play.vsthemes.org/frame/15/8215.webp",
        "https://img.freepik.com/premium-photo/ai-artificial-intelligence-cloud-computing-networks-concept-businesswoman-using-mobile-phone_666034-604.jpg",
        "https://img.freepik.com/premium-vector/abstract-artificial-intelligence-cloud-computing-machine-learning-technology-web-background-virtual-concept-futuristic-background_118331-1428.jpg?w=360",
        "https://img.freepik.com/premium-photo/creative-digital-cloud-computing-backdrop-cloud-data-service-concept-3d-rendering_670147-7742.jpg",
        "https://t4.ftcdn.net/jpg/04/38/93/15/360_F_438931535_DhZaUQHbGvGUxLzPNzT4inocmtABLBoO.jpg",
    ]

    useEffect(() => {
        gsap.fromTo(
            marqueeRef.current,
            { scale: 1.2},
            {
                scale: 2.7,
                ease: 'none',
                scrollTrigger: {
                    trigger: marqueeRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        )
    }, [])

    return (
        <section className="absolute inset-0 z-0">
            <div className="relative h-screen overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="absolute inset-0 w-full h-full -z-10 will-change-transform bg-black"
                >
                    <ThreeDMarquee images={images} />
                </div>
            </div>
        </section>
    )
}
