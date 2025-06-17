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
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd022e9d-8c1a-4f62-9908-0e571711aae2/dfn4mha-f26ff983-2954-4bb4-a8fa-1e64ac5df14c.jpg/v1/fill/w_1600,h_900,q_75,strp/maze_bank_tower__us_bank_tower___by_remyras_dfn4mha-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvZmQwMjJlOWQtOGMxYS00ZjYyLTk5MDgtMGU1NzE3MTFhYWUyXC9kZm40bWhhLWYyNmZmOTgzLTI5NTQtNGJiNC1hOGZhLTFlNjRhYzVkZjE0Yy5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YXplduucLd5fcLVg95B6weUoX_foxWMT10_D9trTnRY",
        title: "Welcome to Maze Bank",
        subtitle: "Tu banco de confianza",
        description: "Descubre una nueva forma de manejar tus finanzas con tecnología de vanguardia y atención personalizada.",
        buttonText: "Abrir Cuenta",
        buttonLink: "/sign-up",
        secondaryButtonText: "Saber Más",
        secondaryButtonLink: "/about"
    },
    {
        id: 2,
        image: "https://www.pcmgames.com/wp-content/uploads/2019/07/GTA-Online-The-Diamond-Casino-Resort-1-1.jpg",
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
        image: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k329/0d23a40a068f5978e7185c491872d1c14ebe25fc.jpg",
        title: "Préstamos Rápidos",
        subtitle: "Aprobación en minutos",
        description: "Obtén el financiamiento que necesitas con tasas competitivas y procesos simplificados.",
        buttonText: "Solicitar Préstamo",
        buttonLink: "/loans",
        secondaryButtonText: "Calcular Cuota",
        secondaryButtonLink: "/calculator"
    }
]
