"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/utils/utils"
import { IoMdMenu } from "react-icons/io";
import { publicNavLinks } from "@/mock/NavGroups"

const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathName = usePathname()
    const links = publicNavLinks

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset"
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button className="flex text-4xl" onClick={toggleMenu}>
                <IoMdMenu />
            </button>
            <div className={cn("fixed bg-MazeBarColor inset-0 w-full h-screen transition-opacity duration-300", {
                "opacity-100 pointer-events-auto": isOpen,
                "opacity-0 pointer-events-none": !isOpen
            })}
                style={{ zIndex: 999 }}
                onClick={toggleMenu}>
                <div
                    className={cn(
                        "absolute top-0 left-0 p-8 transform transition-transform duration-500",
                        {
                            "translate-x-0": isOpen,
                            "-translate-x-full": !isOpen
                        }
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    <nav className="flex flex-col gap-4">
                        {links.map(({ name, path }) => (
                            <div key={path} className="p-2">
                                <Link href={path} onClick={toggleMenu} className="font-medium text-xl">
                                    {name}
                                </Link>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    )
}

export default MobileNavBar