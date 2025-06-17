"use client"

import { FaCreditCard, FaChartLine, FaExchangeAlt, FaPiggyBank } from "react-icons/fa"
import { MdAccountBalance } from "react-icons/md"

export default function DashboardPage() {
    const stats = [
        {
            title: "Saldo Total",
            value: "$25,430.50",
            change: "+2.5%",
            changeType: "positive",
            icon: MdAccountBalance,
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Gastos del Mes",
            value: "$3,240.80",
            change: "-1.2%",
            changeType: "negative",
            icon: FaCreditCard,
            color: "from-red-500 to-red-600"
        },
        {
            title: "Ingresos",
            value: "$8,500.00",
            change: "+5.8%",
            changeType: "positive",
            icon: FaChartLine,
            color: "from-green-500 to-green-600"
        },
        {
            title: "Ahorros",
            value: "$12,680.20",
            change: "+3.1%",
            changeType: "positive",
            icon: FaPiggyBank,
            color: "from-purple-500 to-purple-600"
        }
    ]

    const recentTransactions = [
        {
            id: 1,
            type: "Transferencia",
            description: "Pago a Juan Pérez",
            amount: "-$150.00",
            date: "Hoy, 14:30",
            status: "completed"
        },
        {
            id: 2,
            type: "Depósito",
            description: "Salario mensual",
            amount: "+$3,500.00",
            date: "Ayer, 09:15",
            status: "completed"
        },
        {
            id: 3,
            type: "Compra",
            description: "Supermercado Central",
            amount: "-$89.50",
            date: "Ayer, 18:45",
            status: "completed"
        },
        {
            id: 4,
            type: "Transferencia",
            description: "Recibido de María García",
            amount: "+$75.00",
            date: "Hace 2 días",
            status: "completed"
        }
    ]

    return (
        <div className="min-h-[calc(100vh-200px)]">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Bienvenido de vuelta!</h1>
                <p className="text-gray-600">Aquí tienes un resumen de tu actividad financiera</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                                    <Icon className="text-white text-xl" />
                                </div>
                                <span className={`text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    )
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Transactions */}
                <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Transacciones Recientes</h2>
                        <button className="text-MazeRedColor hover:text-red-700 font-medium text-sm transition-colors">
                            Ver todas
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentTransactions.map((transaction) => (
                            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.amount.startsWith('+')
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-red-100 text-red-600'
                                        }`}>
                                        {transaction.amount.startsWith('+') ? (
                                            <FaExchangeAlt className="text-sm" />
                                        ) : (
                                            <FaCreditCard className="text-sm" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{transaction.description}</p>
                                        <p className="text-sm text-gray-500">{transaction.type} • {transaction.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`font-semibold ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {transaction.amount}
                                    </p>
                                    <span className="text-xs text-gray-500 capitalize">{transaction.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Acciones Rápidas</h2>
                    <div className="space-y-4">
                        <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-MazeRedColor to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                            <FaExchangeAlt className="text-xl" />
                            <span className="font-medium">Transferir Dinero</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300">
                            <FaCreditCard className="text-xl" />
                            <span className="font-medium">Pagar Servicios</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300">
                            <FaPiggyBank className="text-xl" />
                            <span className="font-medium">Crear Meta</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300">
                            <FaChartLine className="text-xl" />
                            <span className="font-medium">Ver Reportes</span>
                        </button>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumen Rápido</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Tarjetas activas</span>
                                <span className="font-semibold text-gray-900">3</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Cuentas vinculadas</span>
                                <span className="font-semibold text-gray-900">2</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Metas activas</span>
                                <span className="font-semibold text-gray-900">5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
