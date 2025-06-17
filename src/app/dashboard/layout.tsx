import type { Metadata } from "next"
import SideBar from "./components/SideBar"

export const metadata: Metadata = {
    title: "MazeBank | Dashboard",
    description: "MazeBank Dashboard - Gestiona tus finanzas de forma segura",
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen bg-gray-50 overflow-hidden">
            {/* Dashboard Container */}
            <div className="flex h-full">
                {/* Sidebar - Fixed height */}
                <SideBar />

                {/* Page Content - Scrollable area */}
                <div className="flex-1 min-w-0 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    )
} 