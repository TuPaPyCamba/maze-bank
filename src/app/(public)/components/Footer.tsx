import Image from "next/image"
import Link from "next/link"

import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import LogWhite from "@/assets/img/logwhite.png"

const Footer = () => {
    return (
        <footer className="w-full bg-MazeFooter">
            <div className="mx-auto max-w-[1400px] flex flex-col pt-14 pb-24 gap-6 md:gap-8 px-4 md:px-0 text-MazeBarColor">
                {/* Logo and Social Media - Mobile: together, Desktop: separate */}
                <div className="flex flex-row justify-between items-center md:justify-start">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={LogWhite} alt={"MazeBank Logo"} className="w-8 h-8 md:w-10 md:h-10" />
                        <h3 className="text-2xl md:text-4xl font-medium">MazeBank</h3>
                    </div>
                    {/* Social Media Links - Mobile: next to logo, Desktop: moved to bottom */}
                    <div className="flex flex-row gap-4 text-xl md:hidden">
                        <Link href={""}>
                            <FaXTwitter />
                        </Link>
                        <Link href={""}>
                            <FaInstagram />
                        </Link>
                        <Link href={""}>
                            <FaFacebook />
                        </Link>
                    </div>
                </div>

                <div className="w-full h-1 bg-MazeBarColor" />

                {/* Links - Mobile: full width, Desktop: flex row */}
                <div className="flex flex-col gap-3 font-bold text-lg md:flex-row md:gap-6 md:justify-between md:items-center">
                    <div className="flex flex-col gap-3 font-bold text-lg md:flex-row md:gap-6">
                        <Link href={""}>Help Center</Link>
                        <Link href={""}>About MazeBank</Link>
                        <Link href={""}>Contact</Link>
                        <Link href={""}>Legal</Link>
                    </div>
                    {/* Social Media Links - Desktop only */}
                    <div className="hidden md:flex flex-row gap-4 text-xl">
                        <Link href={""}>
                            <FaXTwitter />
                        </Link>
                        <Link href={""}>
                            <FaInstagram />
                        </Link>
                        <Link href={""}>
                            <FaFacebook />
                        </Link>
                    </div>
                </div>

                <p className="">
                    © 2025 MazeBank. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer