"use client"

import { useState } from 'react'
import { useUser, useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { dashboardNavLinks } from '@/mock/NavGroups'

import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const { user } = useUser();
    const { signOut } = useClerk();
    const pathname = usePathname();

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleMobileClose = () => {
        setIsMobileOpen(false);
    };

    const handleLinkClick = () => {
        setIsMobileOpen(false);
    };

    return (
        <>
            {/* Mobile Floating Button */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                title="Abrir menú"
            >
                <IoMenu className="text-2xl" />
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={handleMobileClose}
                />
            )}

            {/* Sidebar */}
            <div className={`${isMobileOpen ? 'fixed inset-0 z-50 md:relative md:inset-auto' : 'hidden'} md:flex flex-col h-screen md:h-full bg-white transition-all duration-300 ease-in-out ${isCollapsed ? 'md:w-16 lg:w-16' : 'md:w-64 lg:w-72'}`}>
                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                    <div className="flex items-center">
                        <img src="/log.ico" alt="MazeBank Logo" className="w-8 h-8" />
                        <span className="font-medium text-xl text-black tracking-wide ml-2">MazeBank</span>
                    </div>
                    <button
                        onClick={handleMobileClose}
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Logo + Collapse Button */}
                <div className={`hidden md:flex ${isCollapsed ? 'flex-col items-center gap-2' : 'flex-row items-center justify-between'} p-4 flex-shrink-0`}>
                    {/* Logo */}
                    <div className="flex items-center justify-center">
                        <img src="/log.ico" alt="MazeBank Logo" className="w-8 h-8" />
                        {!isCollapsed && <span className="font-medium text-2xl text-black tracking-wide ml-2">MazeBank</span>}
                    </div>
                    {/* Collapse/Expand Button */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center hover:bg-red-400 transition-colors mt-0 lg:mt-0"
                        title={isCollapsed ? "Expandir barra" : "Colapsar barra"}
                        style={isCollapsed ? { marginTop: '0.5rem' } : {}}
                    >
                        <svg
                            className={`w-4 h-4 text-red-700 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>

                <div className={`flex flex-col flex-1 min-h-0 ${isCollapsed ? 'items-center' : ''}`}>
                    {/* 2. Navigation Links */}
                    <nav className="flex flex-col py-6 gap-2 flex-1 overflow-y-auto">
                        {dashboardNavLinks.map(link => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.key}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={`p-4 flex flex-row items-center gap-2 transition-all duration-300 ease-in-out ${isCollapsed ? 'h-12 w-12 rounded-md p-2 justify-center' : ''} ${isActive ? 'bg-red-400' : 'hover:bg-red-400'}`}
                                >
                                    <link.icon className="text-2xl text-red-700 flex-shrink-0" />
                                    <span className={`text-lg text-black font-medium ${isCollapsed ? 'hidden' : ''}`}>{link.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                    {/* 3. User Section */}
                    <div className="flex flex-col md:gap-2 py-6 flex-shrink-0">
                        {/* settings button */}
                        <Link
                            href="/dashboard/settings"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className={`hover:bg-red-400 p-4 flex flex-row items-center gap-2 transition-all duration-300 ease-in-out ${isCollapsed ? 'h-12 w-12 rounded-md p-2 justify-center' : ''}`}
                        >
                            <IoSettingsOutline className="text-2xl text-red-700 flex-shrink-0" />
                            <span className={`text-lg text-black font-medium ${isCollapsed ? 'hidden' : ''}`}>Settings</span>
                        </Link>
                        {/* User Section */}
                        <div className={`flex flex-row gap-2 p-4 items-center hover:bg-red-400 transition-all duration-300 ease-in-out ${isCollapsed ? 'h-12 w-12 rounded-md p-2 justify-center' : 'justify-between'}`}>
                            <Link href={"/dashboard/profile"} className='flex gap-2 flex-row' onClick={handleLinkClick}>
                                <div className="h-8 w-8 bg-cover rounded-full flex-shrink-0" style={{ backgroundImage: `url(${user?.imageUrl})` }} />
                                <div className={`text-black flex-1 ${isCollapsed ? 'hidden' : ''}`}>
                                    <h3 className="text-base font-medium">{user?.fullName}</h3>
                                    <p className="text-sm text-gray-600">{user?.emailAddresses?.[0]?.emailAddress}</p>
                                </div>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className={`text-red-700 hover:text-red-800 transition-colors ${isCollapsed ? 'hidden' : ''}`}
                                title="Cerrar sesión"
                            >
                                <MdLogout className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar