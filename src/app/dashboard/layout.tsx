import type { Metadata } from "next"

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import SideBar from "./components/SideBar"

import BackImg from "@/assets/img/back.png"

export const metadata: Metadata = {
    title: "MazeBank | Dashboard",
    description: "MazeBank Dashboard - Gestiona tus finanzas de forma segura",
}

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const { userId } = await auth();
    const user = await currentUser();

    if (!userId) {
        return redirect("/sign-in");
    }

    return (
        <div className="h-screen bg-gray-50 overflow-hidden">
            {/* Dashboard Container */}
            <div className="flex h-full">
                {/* Sidebar - Fixed height */}
                <SideBar />
                {/* Page Content - Scrollable area */}
                <div className="flex-1 min-w-0 overflow-y-auto px-6 pt-6 bg-cover" style={{ backgroundImage: `url(${BackImg.src})` }}>
                    {children}
                </div>
            </div>
        </div>
    )
} 