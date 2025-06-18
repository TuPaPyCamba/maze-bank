"use client"

import { useUser } from '@clerk/nextjs'
import { useState } from 'react'
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "MazeBank | Home Page",
//     description: "MazeBank home page",
// };

export default function ProfilePage() {
    const { user, isLoaded } = useUser()
    const [isEditing, setIsEditing] = useState(false)

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen py-4 sm:py-8">
            <div className="max-w-7xl mx-auto">

                {/* HEADER SECTION */}
                {/* ================ */}
                {/* Profile Header with title and edit button */}
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Mi Perfil</h1>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-base sm:text-lg font-medium w-full sm:w-auto"
                        >
                            {isEditing ? 'Cancelar' : 'Editar Perfil'}
                        </button>
                    </div>
                </div>

                {/* MAIN CONTENT GRID */}
                {/* =================== */}
                {/* Responsive layout - single column on mobile, two columns on larger screens */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

                    {/* LEFT COLUMN - Profile Photo & Personal Info */}
                    {/* ========================================== */}
                    <div className="xl:col-span-1 space-y-4 sm:space-y-6 lg:space-y-8">

                        {/* PROFILE PHOTO SECTION */}
                        {/* ====================== */}
                        {/* User profile photo with upload functionality */}
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Foto de Perfil</h2>
                            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                                <div className="relative">
                                    <img
                                        src={user?.imageUrl || '/default-avatar.png'}
                                        alt="Profile"
                                        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-gray-200"
                                    />
                                    {isEditing && (
                                        <button className="absolute bottom-0 sm:bottom-2 right-0 sm:right-2 bg-red-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-700 transition-colors">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                {isEditing && (
                                    <div className="w-full">
                                        <p className="text-sm text-gray-600 mb-3 text-center">Cambiar foto de perfil</p>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* PERSONAL INFORMATION SECTION */}
                        {/* ============================== */}
                        {/* Basic user information (name, email, etc.) */}
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Información Personal</h2>
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            defaultValue={user?.fullName || ''}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900 text-base sm:text-lg">{user?.fullName || 'No especificado'}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de Usuario</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            defaultValue={user?.username || ''}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900 text-base sm:text-lg">@{user?.username || 'No especificado'}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <p className="text-gray-900 text-base sm:text-lg break-all">{user?.emailAddresses?.[0]?.emailAddress || 'No especificado'}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Registro</label>
                                    <p className="text-gray-900 text-base sm:text-lg">
                                        {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'No disponible'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Security & Preferences */}
                    {/* ====================================== */}
                    <div className="xl:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">

                        {/* CONNECTED ACCOUNTS SECTION */}
                        {/* =========================== */}
                        {/* Manage linked social accounts */}
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Cuentas Conectadas</h2>
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-gray-200 gap-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-lg sm:text-xl font-medium text-gray-900">Google</h3>
                                            <p className="text-gray-600 text-sm sm:text-base truncate">Conectado como {user?.emailAddresses?.[0]?.emailAddress}</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium w-full sm:w-auto">
                                        Desvincular
                                    </button>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-lg sm:text-xl font-medium text-gray-900">Apple</h3>
                                            <p className="text-gray-600 text-sm sm:text-base">No conectado</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium w-full sm:w-auto mt-4 sm:mt-0">
                                        Conectar
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* SECURITY SECTION */}
                        {/* ================== */}
                        {/* Password change and security settings */}
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Seguridad</h2>
                            <div className="space-y-4 sm:space-y-6">
                                <div className="border-b border-gray-200 pb-4 sm:pb-6">
                                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">Cambiar Contraseña</h3>
                                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Actualiza tu contraseña para mantener tu cuenta segura</p>
                                    <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium w-full sm:w-auto">
                                        Cambiar Contraseña
                                    </button>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">Autenticación de Dos Factores</h3>
                                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Añade una capa extra de seguridad a tu cuenta</p>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3">
                                        <span className="text-sm text-gray-600 bg-yellow-100 px-3 py-1 rounded-full w-fit">No activado</span>
                                        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium w-full sm:w-auto">
                                            Activar 2FA
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PREFERENCES SECTION */}
                        {/* ==================== */}
                        {/* User preferences and settings */}
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Preferencias</h2>
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-gray-200 gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-medium text-gray-900">Notificaciones por Email</h3>
                                        <p className="text-gray-600 mt-1 text-sm sm:text-base">Recibir notificaciones importantes por email</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer ml-0 sm:ml-6">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-12 h-6 sm:w-14 sm:h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 sm:after:h-6 sm:after:w-6 after:transition-all peer-checked:bg-red-600"></div>
                                    </label>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-gray-200 gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-medium text-gray-900">Notificaciones Push</h3>
                                        <p className="text-gray-600 mt-1 text-sm sm:text-base">Recibir notificaciones en el navegador</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer ml-0 sm:ml-6">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-12 h-6 sm:w-14 sm:h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 sm:after:h-6 sm:after:w-6 after:transition-all peer-checked:bg-red-600"></div>
                                    </label>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-medium text-gray-900">Modo Oscuro</h3>
                                        <p className="text-gray-600 mt-1 text-sm sm:text-base">Cambiar entre tema claro y oscuro</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer ml-0 sm:ml-6">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-12 h-6 sm:w-14 sm:h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 sm:after:h-6 sm:after:w-6 after:transition-all peer-checked:bg-red-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SAVE BUTTON SECTION */}
                {/* ===================== */}
                {/* Save changes button (only visible when editing) */}
                {isEditing && (
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mt-4 sm:mt-6 lg:mt-8">
                        <div className="flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-4">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium w-full sm:w-auto"
                            >
                                Cancelar
                            </button>
                            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium w-full sm:w-auto">
                                Guardar Cambios
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}