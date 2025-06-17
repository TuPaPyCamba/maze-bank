export interface FAQItem {
    id: number
    question: string
    answer: string
}

export const faqData: FAQItem[] = [
    {
        id: 1,
        question: "¿Qué es Maze Bank?",
        answer: "Maze Bank es un banco digital innovador que ofrece una amplia gama de servicios financieros, desde cuentas de ahorro hasta inversiones y préstamos personalizados."
    },
    {
        id: 2,
        question: "¿Cómo puedo abrir una cuenta?",
        answer: "Abrir una cuenta en Maze Bank es rápido y sencillo. Puedes hacerlo directamente desde nuestra aplicación móvil o visitando nuestra página web y siguiendo los pasos de registro."
    },
    {
        id: 3,
        question: "¿Es seguro mi dinero en Maze Bank?",
        answer: "Sí, la seguridad de tus fondos es nuestra máxima prioridad. En Maze Bank utilizamos tecnología de cifrado avanzada y cumplimos con todas las regulaciones bancarias para proteger tu dinero y tus datos personales."
    },
    {
        id: 4,
        question: "¿Cuáles son las tarifas por transferencias?",
        answer: "Ofrecemos transferencias gratuitas entre cuentas Maze Bank. Para transferencias a otros bancos, aplicamos tarifas bajas que varían según el monto y el destino. Consulta nuestra sección de tarifas para más detalles."
    },
    {
        id: 5,
        question: "¿Cómo puedo contactar con soporte al cliente?",
        answer: "Puedes contactar a nuestro equipo de soporte al cliente a través del chat en la aplicación, por teléfono o enviando un correo electrónico. Estamos disponibles 24/7 para ayudarte con cualquier consulta."
    },
    {
        id: 6,
        question: "¿Puedo invertir con Maze Bank?",
        answer: "Sí, ofrecemos diversas opciones de inversión adaptadas a tus objetivos y perfil de riesgo. Desde fondos de inversión hasta estrategias personalizadas, nuestros expertos te guiarán en cada paso."
    }
]
