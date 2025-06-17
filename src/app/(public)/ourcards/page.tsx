"use client"

import { useState, useEffect } from "react"
import { FaCreditCard, FaRegCreditCard, FaShieldHalved, FaStar, FaGift, FaPlane } from "react-icons/fa6"
import { MdAccountBalance, MdSecurity } from "react-icons/md"
import { IoDiamondOutline } from "react-icons/io5"

export default function OurCardsPage() {
    const [activeCard, setActiveCard] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const cards = [
        {
            id: 1,
            name: "Premium Credit",
            type: "Credit",
            color: "from-purple-600 via-purple-700 to-purple-800",
            icon: FaCreditCard,
            features: ["3% cashback on all purchases", "No annual fee first year", "Travel insurance included", "Priority customer service"],
            benefits: ["Unlimited rewards", "Exclusive events access", "Concierge service", "Airport lounge access"],
            annualFee: "$0 first year",
            creditLimit: "Up to $50,000",
            cardNumber: "**** **** **** 1234",
            holder: "JOHN DOE",
            expires: "12/28"
        },
        {
            id: 2,
            name: "Classic Credit",
            type: "Credit",
            color: "from-blue-600 via-blue-700 to-blue-800",
            icon: FaRegCreditCard,
            features: ["1.5% cashback on purchases", "Low annual fee", "Fraud protection", "Mobile banking"],
            benefits: ["Everyday rewards", "Easy approval", "Budgeting tools", "24/7 support"],
            annualFee: "$25",
            creditLimit: "Up to $25,000",
            cardNumber: "**** **** **** 5678",
            holder: "JANE SMITH",
            expires: "09/27"
        },
        {
            id: 3,
            name: "Premium Debit",
            type: "Debit",
            color: "from-emerald-600 via-emerald-700 to-emerald-800",
            icon: MdAccountBalance,
            features: ["No monthly fees", "ATM fee reimbursements", "Mobile banking access", "Instant notifications"],
            benefits: ["Direct access to funds", "No credit check", "Budget control", "Security features"],
            annualFee: "$0",
            creditLimit: "Account balance",
            cardNumber: "**** **** **** 9012",
            holder: "MIKE JOHNSON",
            expires: "03/29"
        },
        {
            id: 4,
            name: "Student Debit",
            type: "Debit",
            color: "from-orange-600 via-orange-700 to-orange-800",
            icon: MdAccountBalance,
            features: ["No monthly maintenance fee", "Free ATM withdrawals", "Budgeting tools included", "Student discounts"],
            benefits: ["Perfect for students", "Easy account management", "Financial education", "Parental controls"],
            annualFee: "$0",
            creditLimit: "Account balance",
            cardNumber: "**** **** **** 3456",
            holder: "SARAH WILSON",
            expires: "06/28"
        }
    ]

    const CardIcon = cards[activeCard].icon

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/franchises/grand-theft-auto-v/gtav-og-image.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-MazeRedColor/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 pt-32 pb-16 px-4">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-MazeRedColor to-red-500 bg-clip-text text-transparent">
                            MAZE
                        </span>
                        <span className="text-white">BANK</span>
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Tarjetas de Crédito y Débito
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Elige la tarjeta perfecta para tu estilo de vida con beneficios exclusivos y recompensas únicas
                    </p>
                </div>
            </div>

            {/* Cards Showcase */}
            <div className="relative z-10 pb-20 px-4">
                <div className="max-w-[1400px] mx-auto">
                    {/* Main Card Display */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* 3D Card Preview */}
                        <div className="relative h-[500px] flex items-center justify-center">
                            <div
                                className="relative w-80 h-52 transform transition-all duration-700 hover:scale-110"
                                style={{
                                    transform: `perspective(1000px) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg)`
                                }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${cards[activeCard].color} rounded-2xl p-6 shadow-2xl border border-white/20`}>
                                    {/* Card Design Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                                    {/* Card Content */}
                                    <div className="relative z-10 h-full flex flex-col justify-between text-white">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-1">MazeBank</h3>
                                                <p className="text-white/80 text-sm">{cards[activeCard].name}</p>
                                            </div>
                                            <CardIcon className="text-white/80 text-3xl" />
                                        </div>

                                        <div>
                                            <div className="text-2xl font-mono mb-4 tracking-wider">{cards[activeCard].cardNumber}</div>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-white/60 text-xs uppercase tracking-wider">Card Holder</p>
                                                    <p className="text-white font-medium">{cards[activeCard].holder}</p>
                                                </div>
                                                <div>
                                                    <p className="text-white/60 text-xs uppercase tracking-wider">Expires</p>
                                                    <p className="text-white font-medium">{cards[activeCard].expires}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card Details */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                <h3 className="text-4xl font-bold text-white mb-4">{cards[activeCard].name}</h3>
                                <p className="text-xl text-gray-300 mb-8">La tarjeta perfecta para tu estilo de vida</p>

                                {/* Key Features */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {cards[activeCard].features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <FaStar className="text-MazeRedColor text-lg flex-shrink-0" />
                                            <span className="text-white">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Card Stats */}
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white/10 rounded-xl p-4 text-center">
                                        <p className="text-gray-400 text-sm">Annual Fee</p>
                                        <p className="text-white font-bold text-xl">{cards[activeCard].annualFee}</p>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4 text-center">
                                        <p className="text-gray-400 text-sm">Credit Limit</p>
                                        <p className="text-white font-bold text-xl">{cards[activeCard].creditLimit}</p>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="w-full bg-gradient-to-r from-MazeRedColor to-red-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Solicitar Tarjeta
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cards.map((card, index) => {
                            const CardIconComponent = card.icon
                            return (
                                <div
                                    key={card.id}
                                    className={`relative cursor-pointer transition-all duration-500 transform hover:scale-105 ${activeCard === index ? 'scale-105' : ''
                                        }`}
                                    onClick={() => setActiveCard(index)}
                                >
                                    <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 h-48 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${activeCard === index ? 'border-white/50' : 'border-transparent'
                                        }`}>
                                        {/* Card Design */}
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>

                                        {/* Card Content */}
                                        <div className="relative z-10 h-full flex flex-col justify-between text-white">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-lg font-bold mb-1">MazeBank</h3>
                                                    <p className="text-white/80 text-sm">{card.name}</p>
                                                </div>
                                                <CardIconComponent className="text-white/80 text-xl" />
                                            </div>

                                            <div>
                                                <div className="text-lg font-mono mb-2">**** **** **** {card.cardNumber.slice(-4)}</div>
                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <p className="text-white/60 text-xs">CARD HOLDER</p>
                                                        <p className="text-white font-medium text-sm">{card.holder}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-white/60 text-xs">EXPIRES</p>
                                                        <p className="text-white font-medium text-sm">{card.expires}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Active Indicator */}
                                    {activeCard === index && (
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-MazeRedColor rounded-full flex items-center justify-center">
                                            <FaShieldHalved className="text-white text-xs" />
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    {/* Benefits Section */}
                    <div className="mt-20">
                        <h3 className="text-4xl font-bold text-white text-center mb-12">Beneficios Exclusivos</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-MazeRedColor to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaGift className="text-white text-2xl" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Recompensas Únicas</h4>
                                <p className="text-gray-300">Gana puntos en cada compra y canjéalos por beneficios exclusivos</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaPlane className="text-white text-2xl" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Seguro de Viaje</h4>
                                <p className="text-gray-300">Protección completa en todos tus viajes con cobertura internacional</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MdSecurity className="text-white text-2xl" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Seguridad Total</h4>
                                <p className="text-gray-300">Protección avanzada contra fraude y tecnología de encriptación</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <IoDiamondOutline className="text-white text-2xl" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Servicio Premium</h4>
                                <p className="text-gray-300">Atención personalizada 24/7 y servicios exclusivos para clientes VIP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}