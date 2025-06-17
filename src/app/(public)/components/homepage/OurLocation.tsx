"use client"

import Link from "next/link"
import { FaMapMarkerAlt, FaBuilding, FaClock, FaPhone, FaArrowRight } from "react-icons/fa"

const OurLocation = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Encuentra tu Sucursal
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Visita cualquiera de nuestras sucursales y experimenta el servicio personalizado que solo MazeBank puede ofrecerte.
                    </p>
                </div>

                {/* Main Location Card */}
                <div className="relative mb-12">
                    <div className="bg-gradient-to-br from-MazeRedColor via-red-600 to-red-700 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        {/* Background Design Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>

                        {/* Content */}
                        <div className="relative z-10 text-white">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                                {/* Left Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <FaBuilding className="text-3xl text-white/90" />
                                        <h3 className="text-3xl md:text-4xl font-bold">Sede Central MazeBank</h3>
                                    </div>

                                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                        Nuestra sede principal en el corazón de la ciudad. Servicios bancarios completos,
                                        asesoramiento financiero personalizado y la mejor atención que solo MazeBank puede ofrecerte.
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div className="flex items-center gap-3">
                                            <FaMapMarkerAlt className="text-2xl text-white/80" />
                                            <div>
                                                <p className="font-semibold">Ubicación Central</p>
                                                <p className="text-white/70 text-sm">Fácil acceso</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <FaClock className="text-2xl text-white/80" />
                                            <div>
                                                <p className="font-semibold">Horario Extendido</p>
                                                <p className="text-white/70 text-sm">Lun-Vie 8AM-8PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <FaPhone className="text-2xl text-white/80" />
                                            <div>
                                                <p className="font-semibold">Atención 24/7</p>
                                                <p className="text-white/70 text-sm">Soporte completo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Content - CTA */}
                                <div className="flex flex-col items-center lg:items-end gap-6">
                                    <div className="text-center lg:text-right">
                                        <p className="text-2xl font-bold mb-2">¿Listo para visitarnos?</p>
                                        <p className="text-white/80">Explora todas nuestras ubicaciones</p>
                                    </div>

                                    <Link
                                        href="/mazebankmap"
                                        className="group bg-white text-MazeRedColor px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-3"
                                    >
                                        Ver Todas las Sucursales
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* ATM Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FaMapMarkerAlt className="text-2xl text-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Cajeros Automáticos</h4>
                                <p className="text-gray-600">Acceso 24/7</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Retira dinero sin tarjeta usando nuestra app en cualquiera de nuestros cajeros automáticos.
                        </p>
                        <Link
                            href="/mazebankmap"
                            className="text-MazeRedColor font-semibold hover:underline inline-flex items-center gap-2"
                        >
                            Encontrar ATM
                            <FaArrowRight className="text-sm" />
                        </Link>
                    </div>

                    {/* Mobile Banking Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-green-100 p-3 rounded-full">
                                <FaBuilding className="text-2xl text-green-600" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Banca Móvil</h4>
                                <p className="text-gray-600">Servicios Digitales</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Realiza todas tus operaciones bancarias desde la comodidad de tu dispositivo móvil.
                        </p>
                        <Link
                            href="/mazebankmap"
                            className="text-MazeRedColor font-semibold hover:underline inline-flex items-center gap-2"
                        >
                            Descargar App
                            <FaArrowRight className="text-sm" />
                        </Link>
                    </div>

                    {/* Customer Service Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <FaPhone className="text-2xl text-purple-600" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Atención Personal</h4>
                                <p className="text-gray-600">Soporte Dedicado</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Nuestro equipo de expertos está listo para ayudarte con cualquier consulta o necesidad.
                        </p>
                        <Link
                            href="/mazebankmap"
                            className="text-MazeRedColor font-semibold hover:underline inline-flex items-center gap-2"
                        >
                            Contactar
                            <FaArrowRight className="text-sm" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurLocation