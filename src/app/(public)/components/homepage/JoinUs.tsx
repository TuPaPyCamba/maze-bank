"use client"

import { FaInstagram, FaTiktok, FaFacebookF, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa"
import Image from "next/image"

import JoinUsImg from "@/assets/img/joinus.png"

const JoinUs = () => {
    return (
        <div className="w-full bg-MazeBlack">
            <div className="max-w-[1400px] px-4 xl:px-0 mx-auto py-16 lg:py-0 flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">
                {/* Left Section: Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-white py-8 lg:py-0">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Únete a la comunidad <br /> de finanzas libres
                    </h2>

                    <div className="mt-auto">
                        <p className="text-lg mb-4 text-gray-200">
                            ¿Alguna duda?
                        </p>
                        <p className="text-lg mb-6 text-gray-200">
                            Platica con nuestros xpeers, te atenderemos <br /> como familia. <FaHeart className="inline-block text-MazeRedColor" />
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-6 mb-6">
                            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-2xl">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-2xl">
                                <FaTiktok />
                            </a>
                            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-2xl">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-2xl">
                                <FaXTwitter />
                            </a>
                            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-2xl">
                                <FaYoutube />
                            </a>
                            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-2xl">
                                <FaLinkedin />
                            </a>
                        </div>

                        <p className="text-lg font-semibold text-gray-100">
                            ayuda@mazebank.com
                        </p>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div
                    className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[400px] lg:min-h-[85vh] bg-cover overflow-hidden"
                    style={{ backgroundImage: `url(${JoinUsImg.src})`, backgroundPosition: 'top 50%' }}
                >
                    {/* Optional: Add an overlay or card if part of the image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>
        </div >
    )
}

export default JoinUs