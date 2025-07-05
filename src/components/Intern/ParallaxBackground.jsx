'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ThreeDMarquee } from './3dMarquee'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxBackground() {
    const marqueeRef = useRef(null)

    const images = [
        "https://media.tenor.com/zfKrsS7Q388AAAAe/python.png",
        "https://img.freepik.com/premium-vector/java-file-isometric-style-icon-symbol-white-background-eps-10-file_848977-3885.jpg",
        "https://www.logo.wine/a/logo/C%2B%2B/C%2B%2B-Logo.wine.svg",
        "https://static.vecteezy.com/system/resources/previews/010/213/636/non_2x/jsj-letter-technology-logo-design-on-white-background-jsj-creative-initials-letter-it-logo-concept-jsj-letter-design-vector.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://cdn.vectorstock.com/i/500p/43/97/logo-data-science-gradient-colorful-style-vector-41554397.jpg",
        "https://thumbs.dreamstime.com/b/cyber-security-words-wooden-block-copy-space-white-background-228278962.jpg",
        "https://hrbizhub.com/wp-content/uploads/2023/05/th-32.jpg",
        "https://www.amarinfotech.com/featureimages/Mean-Stack-App-Development.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://static.vecteezy.com/system/resources/previews/016/188/682/non_2x/artificial-intelligence-logo-icon-symbol-ai-deep-learning-blockchain-neural-network-concept-machine-learning-artificial-intelligence-ai-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/023/451/271/non_2x/ml-concept-round-line-banner-machine-learning-illustration-vector.jpg",
        "https://wallpapers.com/images/hd/android-developer-vl6behb6q3hvbxtt.jpg",
        "https://thumbs.dreamstime.com/b/php-letter-technology-logo-design-white-background-creative-initials-concept-252549993.jpg",
        "https://community.codenewbie.org/images/2SOASXekcWe-f4t3Cqu8lHco8KuRlz-EpzIF1D4Swh8/rs:fill:1280:720/g:sm/mb:500000/ar:1/aHR0cHM6Ly9jb21t/dW5pdHkuY29kZW5l/d2JpZS5vcmcvcmVt/b3RlaW1hZ2VzL2kv/NGRxYjhmcTVqMTh2/ZHdwZmlzdWgucG5n",
        "https://miro.medium.com/v2/0*4MoODyBMYHRRbKHT.jpeg",
        "https://media.istockphoto.com/id/2161590787/vector/artificial-intelligence-concept-with-electronic-circuit-vector-electronic-ai-chip-artificial.jpg?s=612x612&w=0&k=20&c=s4r_bXidIpTBH68lYHaS098yGtQDJBTXeo_lpV-mx-4=",
        "https://static.vecteezy.com/system/resources/previews/010/213/636/non_2x/jsj-letter-technology-logo-design-on-white-background-jsj-creative-initials-letter-it-logo-concept-jsj-letter-design-vector.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://cdn.vectorstock.com/i/500p/43/97/logo-data-science-gradient-colorful-style-vector-41554397.jpg",
        "https://thumbs.dreamstime.com/b/cyber-security-words-wooden-block-copy-space-white-background-228278962.jpg",
        "https://hrbizhub.com/wp-content/uploads/2023/05/th-32.jpg",
        "https://static.vecteezy.com/system/resources/previews/023/451/271/non_2x/ml-concept-round-line-banner-machine-learning-illustration-vector.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://static.vecteezy.com/system/resources/previews/016/188/682/non_2x/artificial-intelligence-logo-icon-symbol-ai-deep-learning-blockchain-neural-network-concept-machine-learning-artificial-intelligence-ai-vector.jpg",
        "https://www.amarinfotech.com/featureimages/Mean-Stack-App-Development.jpg",
        "https://wallpapers.com/images/hd/android-developer-vl6behb6q3hvbxtt.jpg",
        "https://thumbs.dreamstime.com/b/php-letter-technology-logo-design-white-background-creative-initials-concept-252549993.jpg",
        "https://media.tenor.com/zfKrsS7Q388AAAAe/python.png",
        "https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png",
        "https://www.logo.wine/a/logo/C%2B%2B/C%2B%2B-Logo.wine.svg",
        "https://static.vecteezy.com/system/resources/previews/010/213/636/non_2x/jsj-letter-technology-logo-design-on-white-background-jsj-creative-initials-letter-it-logo-concept-jsj-letter-design-vector.jpg",
        "https://media.istockphoto.com/id/955808890/vector/cloud-data-technology-polygon-concept-or-background.jpg?s=612x612&w=0&k=20&c=BfLvTzxJlLQec0cFOpy1GebZDfpeXHwRprX3gDynRtk=",
        "https://cdn.vectorstock.com/i/500p/43/97/logo-data-science-gradient-colorful-style-vector-41554397.jpg",
        "https://thumbs.dreamstime.com/b/cyber-security-words-wooden-block-copy-space-white-background-228278962.jpg",
        "https://hrbizhub.com/wp-content/uploads/2023/05/th-32.jpg",
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
        <section className="absolute inset-0 z-0 min-h-screen max-h-screen">
            <div className="relative h-screen overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="absolute inset-0 w-full h-full -z-10 will-change-transform bg-white"
                >
                    <ThreeDMarquee images={images} />
                </div>
            </div>
        </section>
    )
}
