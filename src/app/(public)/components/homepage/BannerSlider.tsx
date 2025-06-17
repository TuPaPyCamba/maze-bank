"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa"

import { bannerSlides, type Slide } from "@/mock/BannerSlides"

const BannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        if (!isPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isPlaying])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Slides */}
            <div className="relative w-full h-full">
                {bannerSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover object-top"
                                priority={index === 0}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <div className="text-center text-white max-w-4xl mx-auto px-8">
                                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                                    {slide.title}
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
                                    {slide.subtitle}
                                </h2>
                                <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                                    {slide.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href={slide.buttonLink}
                                        className="bg-MazeRedColor hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
                                    >
                                        {slide.buttonText}
                                    </Link>
                                    {slide.secondaryButtonText && (
                                        <Link
                                            href={slide.secondaryButtonLink || "#"}
                                            className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
                                        >
                                            {slide.secondaryButtonText}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300 z-20"
                aria-label="Previous slide"
            >
                <FaChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300 z-20"
                aria-label="Next slide"
            >
                <FaChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {bannerSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide
                            ? "bg-MazeRedColor"
                            : "bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Play/Pause Button */}
            <button
                onClick={togglePlayPause}
                className="absolute bottom-6 right-6 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300 z-20"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
                <FaPlay
                    size={16}
                    className={`transition-transform duration-300 ${isPlaying ? "opacity-50" : "opacity-100"
                        }`}
                />
            </button>
        </div>
    )
}

export default BannerSlider