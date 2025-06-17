"use client"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/utils/utils"
import { useScrollDirection } from "@/hooks/useScrollDirection"
import { usePathname } from "next/navigation"

import MazeBankLogo from "@/assets/img/logoMazeBank.png"
import MobileNavBar from "./MobileNavBar"

const NavBar = () => {
    const scrollDirection = useScrollDirection()
    const pathName = usePathname()

    return (
        <nav className={cn("w-full fixed top-0 left-0 right-0 z-50 shadow-lg bg-MazeBarColor transition-transform duration-300 ease-in-out", scrollDirection === "down" ? "-translate-y-full" : "translate-y-0")}>
            <div className="relative flex justify-between max-w-[1400px] mx-auto items-center px-4 py-4">
                <Link href={"/"}>
                    <Image src={MazeBankLogo} alt="MazeBank Logo" className="w-40 md:w-52" />
                </Link>
                <div className="">
                    {/* Mobile Navbar */}
                    <div className="flex md:hidden">
                        <MobileNavBar />
                    </div>
                    <div className="hidden md:flex flex-row gap-8">
                        <Link href={"/sign-up"}>Register</Link>
                        <Link href={"/sign-in"}>Access</Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-1 bg-MazeRedColor" />
        </nav>
    )
}


export default NavBar