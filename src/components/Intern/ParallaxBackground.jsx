'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ThreeDMarquee } from './3dMarquee'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxBackground() {
    const marqueeRef = useRef(null)

    const images = [
        "https://static.vecteezy.com/system/resources/thumbnails/020/436/128/small_2x/white-grey-polygon-technology-background-abstract-technology-with-line-digital-color-grey-blue-dot-hi-tech-polygon-technological-for-web-banner-background-structure-object-vector.jpg",
        "https://img.freepik.com/premium-vector/java-file-isometric-style-icon-symbol-white-background-eps-10-file_848977-3885.jpg",
        "https://www.logo.wine/a/logo/C%2B%2B/C%2B%2B-Logo.wine.svg",
        "https://static.vecteezy.com/system/resources/previews/010/213/636/non_2x/jsj-letter-technology-logo-design-on-white-background-jsj-creative-initials-letter-it-logo-concept-jsj-letter-design-vector.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://cdn.vectorstock.com/i/500p/43/97/logo-data-science-gradient-colorful-style-vector-41554397.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uIwA1Cxdql8PxiDTL-ap_9pwonnha90lGA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kjg24puI0W0YNRy1nslXZXoff1wgNn7Mhg&s",
        "https://www.amarinfotech.com/featureimages/Mean-Stack-App-Development.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://static.vecteezy.com/system/resources/previews/016/188/682/non_2x/artificial-intelligence-logo-icon-symbol-ai-deep-learning-blockchain-neural-network-concept-machine-learning-artificial-intelligence-ai-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/023/451/271/non_2x/ml-concept-round-line-banner-machine-learning-illustration-vector.jpg",
        "https://wallpapers.com/images/hd/android-developer-vl6behb6q3hvbxtt.jpg",
        "https://thumbs.dreamstime.com/b/php-letter-technology-logo-design-white-background-creative-initials-concept-252549993.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/020/436/128/small_2x/white-grey-polygon-technology-background-abstract-technology-with-line-digital-color-grey-blue-dot-hi-tech-polygon-technological-for-web-banner-background-structure-object-vector.jpg",
        "https://miro.medium.com/v2/0*4MoODyBMYHRRbKHT.jpeg",
        "https://media.istockphoto.com/id/2161590787/vector/artificial-intelligence-concept-with-electronic-circuit-vector-electronic-ai-chip-artificial.jpg?s=612x612&w=0&k=20&c=s4r_bXidIpTBH68lYHaS098yGtQDJBTXeo_lpV-mx-4=",
        "https://static.vecteezy.com/system/resources/previews/010/213/636/non_2x/jsj-letter-technology-logo-design-on-white-background-jsj-creative-initials-letter-it-logo-concept-jsj-letter-design-vector.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://cdn.vectorstock.com/i/500p/43/97/logo-data-science-gradient-colorful-style-vector-41554397.jpg",
        "https://static.vecteezy.com/system/resources/previews/012/773/525/non_2x/technology-concept-background-with-text-space-free-vector.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kjg24puI0W0YNRy1nslXZXoff1wgNn7Mhg&s",
        "https://static.vecteezy.com/system/resources/previews/023/451/271/non_2x/ml-concept-round-line-banner-machine-learning-illustration-vector.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://static.vecteezy.com/system/resources/previews/016/188/682/non_2x/artificial-intelligence-logo-icon-symbol-ai-deep-learning-blockchain-neural-network-concept-machine-learning-artificial-intelligence-ai-vector.jpg",
        "https://www.amarinfotech.com/featureimages/Mean-Stack-App-Development.jpg",
        "https://wallpapers.com/images/hd/android-developer-vl6behb6q3hvbxtt.jpg",
        "https://thumbs.dreamstime.com/b/php-letter-technology-logo-design-white-background-creative-initials-concept-252549993.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/020/436/128/small_2x/white-grey-polygon-technology-background-abstract-technology-with-line-digital-color-grey-blue-dot-hi-tech-polygon-technological-for-web-banner-background-structure-object-vector.jpg",
        "https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png",
        "https://www.logo.wine/a/logo/C%2B%2B/C%2B%2B-Logo.wine.svg",
        "https://static.vecteezy.com/system/resources/previews/010/213/636/non_2x/jsj-letter-technology-logo-design-on-white-background-jsj-creative-initials-letter-it-logo-concept-jsj-letter-design-vector.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://cdn.vectorstock.com/i/500p/43/97/logo-data-science-gradient-colorful-style-vector-41554397.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uIwA1Cxdql8PxiDTL-ap_9pwonnha90lGA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kjg24puI0W0YNRy1nslXZXoff1wgNn7Mhg&s",
        "https://www.amarinfotech.com/featureimages/Mean-Stack-App-Development.jpg",
        "https://thumbs.dreamstime.com/b/full-stack-dev-line-icon-linear-style-sign-mobile-concept-web-design-laptop-both-frontend-backend-symbols-outline-359515358.jpg",
         "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
]

    useEffect(() => {
        gsap.fromTo(
            marqueeRef.current,
            { scale: 1.2 },
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
        <section className="absolute inset-0 z-0 h-auto lg:min-h-screen max-h-screen border-b-black">
            <div className="relative sm:h-full lg:h-screen overflow-hidden">
                 <div
                    ref={marqueeRef}
                    className="absolute inset-0 w-full h-full -z-10 will-change-transform bg-white overflow-hidden transform-border duration-100 ease-in-out"
                >
                    <ThreeDMarquee images={images} />
                    <div className="absolute bottom-0 left-0 w-full h-25 pointer-events-none bg-gradient-to-t from-white to-transparent backdrop-blur-md" />
                </div>
            </div>
        </section>
    )
}
