import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaPiggyBank, FaPercent, FaEdit, FaExchangeAlt, FaMobileAlt, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";

const WhatWeHaveForYou = () => {
    return (
        <div className="bg-white rounded-lg md:rounded-3xl shadow-2xl py-16 px-6">
            <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row items-center gap-12">
                {/* Left Section - Image and Download Text */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
                    <div className="relative w-full max-w-sm mx-auto aspect-[0.5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                        {/* Placeholder for phone image */}
                        <Image
                            src="/phone-mockup.png"
                            alt="App Screen"
                            width={280}
                            height={560}
                            className="object-contain"
                        />
                        {/* Placeholder for QR code */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">
                            <Image
                                src="/qr-code.png"
                                alt="QR Code to Download App"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <p className="mt-8 text-lg md:text-xl font-medium text-gray-700">
                        Descarga la app.
                    </p>
                </div>

                {/* Right Section - Content */}
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Conoce lo que puedes hacer con la app Maze Bank
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-10">
                        Transfiere, retira, consulta tus saldos o movimientos y paga tus servicios o tarjetas y más desde tu celular.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Feature Item 1: Dimo */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaMobileAlt className="text-MazeRedColor text-3xl mb-3" />
                            <p className="font-semibold text-gray-800">Dimo</p>
                        </div>
                        {/* Feature Item 2: Transferencias */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaExchangeAlt className="text-MazeRedColor text-3xl mb-3" />
                            <p className="font-semibold text-gray-800">Transferencias</p>
                        </div>
                        {/* Feature Item 3: Dinero Creciente */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaChartLine className="text-MazeRedColor text-3xl mb-3" />
                            <p className="font-semibold text-gray-800">Dinero Creciente</p>
                        </div>
                        {/* Feature Item 4: Mis Metas */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaPiggyBank className="text-MazeRedColor text-3xl mb-3" />
                            <p className="font-semibold text-gray-800">Mis Metas</p>
                        </div>
                        {/* Feature Item 5: Retiro sin tarjeta */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaMoneyBillWave className="text-MazeRedColor text-3xl mb-3" />
                            <p className="font-semibold text-gray-800">Retiro sin tarjeta</p>
                        </div>
                        {/* Feature Item 6: Mis Ofertas */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaPercent className="text-MazeRedColor text-3xl mb-3" />
                            <p className="font-semibold text-gray-800">Mis Ofertas</p>
                        </div>
                        {/* Feature Item 7: Domiciliación */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaCalendarCheck className="text-MazeRedColor text-3xl mb-3" />
                            <p className="font-semibold text-gray-800">Domiciliación</p>
                        </div>
                        {/* Feature Item 8: Actualiza Datos */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaEdit className="text-MazeRedColor text-3xl mb-3" />
                            <p className="font-semibold text-gray-800">Actualiza Datos</p>
                        </div>
                    </div>

                    {/* Call to Action Button
                    <div className="text-center md:text-left">
                        <Link href="/tutorials" className="bg-MazeRedColor text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                            Ver tutoriales
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default WhatWeHaveForYou