import { FaHome, FaUser, FaCog } from "react-icons/fa"
import { IoHomeOutline } from "react-icons/io5"

export const publicNavLinks = [
    { name: "Home", path: "/" },
    // { name: "Home", path: "/" },
    // { name: "Home", path: "/" },
    { name: "Access", path: "/sign-in" },
    { name: "Register", path: "/sign-up" }
]

export const dashboardNavLinks = [
    {
        key: "home",
        label: "Home",
        icon: IoHomeOutline,
        href: "/dashboard"
    }
    // {
    //     key: "profile",
    //     label: "Perfil",
    //     icon: FaUser,
    //     href: "/dashboard/profile"
    // },
    // {
    //     key: "settings",
    //     label: "Configuración",
    //     icon: FaCog,
    //     href: "/dashboard/settings"
    // }
]
