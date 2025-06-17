export interface Slide {
    id: number
    image: string
    title: string
    subtitle: string
    description: string
    buttonText: string
    buttonLink: string
    secondaryButtonText?: string
    secondaryButtonLink?: string
}

export const bannerSlides: Slide[] = [
    {
        id: 1,
        image: "/banner1.jpg",
        title: "Bienvenido a Maze Bank",
        subtitle: "Tu banco de confianza",
        description: "Descubre una nueva forma de manejar tus finanzas con tecnología de vanguardia y atención personalizada.",
        buttonText: "Abrir Cuenta",
        buttonLink: "/sign-up",
        secondaryButtonText: "Saber Más",
        secondaryButtonLink: "/about"
    },
    {
        id: 2,
        image: "/banner2.jpg",
        title: "Inversiones Inteligentes",
        subtitle: "Crecimiento garantizado",
        description: "Nuestros expertos te ayudan a maximizar tus inversiones con estrategias personalizadas.",
        buttonText: "Invertir Ahora",
        buttonLink: "/investments",
        secondaryButtonText: "Ver Portafolio",
        secondaryButtonLink: "/portfolio"
    },
    {
        id: 3,
        image: "/banner3.jpg",
        title: "Préstamos Rápidos",
        subtitle: "Aprobación en minutos",
        description: "Obtén el financiamiento que necesitas con tasas competitivas y procesos simplificados.",
        buttonText: "Solicitar Préstamo",
        buttonLink: "/loans",
        secondaryButtonText: "Calcular Cuota",
        secondaryButtonLink: "/calculator"
    }
]
