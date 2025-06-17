export interface MapLocation {
    id: string
    x: number // Percentage from left
    y: number // Percentage from top
    title: string
    description: string
    image: string // New property for preview image
}

export const locations: MapLocation[] = [
    {
        id: "headquarters",
        x: 30, // 30% from left
        y: 40, // 40% from top
        title: "Sede Central Maze Bank",
        description: "Nuestra sede principal en el corazón de la ciudad. Servicios bancarios completos y asesoramiento financiero.",
        image: "/src/assets/img/back.png"
    },
    {
        id: "branch-west",
        x: 70,
        y: 25,
        title: "Sucursal Oeste",
        description: "Acceso rápido a cajeros automáticos y atención personalizada en la zona oeste.",
        image: "/images/branch2.jpg"
    },
    {
        id: "atm-downtown",
        x: 45,
        y: 70,
        title: "ATM Centro",
        description: "Cajero automático 24/7 ubicado estratégicamente en el centro.",
        image: "/images/branch3.jpg"
    },
    {
        id: "branch-north",
        x: 15,
        y: 60,
        title: "Sucursal Norte",
        description: "Servicios especializados para empresas y clientes VIP en la zona norte.",
        image: "/images/branch4.jpg"
    }
]
