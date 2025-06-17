"use client"

import { useState } from 'react'

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className={`hidden md:block h-full bg-slate-500 transition-all duration-300 ease-in-out ${isCollapsed ? 'md:w-16 lg:w-16' : 'md:w-16 lg:w-80'
            }`}>
            <div className="p-4">
                {/* Toggle Button - Only visible on large screens */}
                <div className="hidden lg:flex justify-end mb-4">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                        title={isCollapsed ? "Expandir barra" : "Colapsar barra"}
                    >
                        <svg
                            className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>

                {/* Logo/Content - Hidden on medium, visible on large when expanded */}
                <div className={`${isCollapsed ? 'hidden' : 'hidden lg:block'}`}>
                    logos xd
                </div>

                {/* Icon only for medium screens or when collapsed on large */}
                <div className={`${isCollapsed ? 'lg:flex' : 'lg:hidden'} flex justify-center`}>
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-slate-500 font-bold text-sm">M</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar