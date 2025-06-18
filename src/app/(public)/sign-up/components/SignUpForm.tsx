"use client"

import { useState } from "react"
import { useSignUp } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaPhone, FaIdCard, FaApple } from "react-icons/fa"

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        idNumber: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [error, setError] = useState<string | null>(null)
    const { isLoaded, signUp, setActive } = useSignUp();
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = "El nombre es requerido"
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "El apellido es requerido"
        }

        if (!formData.email.trim()) {
            newErrors.email = "El email es requerido"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El email no es válido"
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "El teléfono es requerido"
        }

        if (!formData.idNumber.trim()) {
            newErrors.idNumber = "El número de identificación es requerido"
        }

        if (!formData.password) {
            newErrors.password = "La contraseña es requerida"
        } else if (formData.password.length < 8) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres"
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirma tu contraseña"
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden"
        }

        if (!formData.acceptTerms) {
            newErrors.acceptTerms = "Debes aceptar los términos y condiciones"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        if (!validateForm() || !isLoaded) return;
        try {
            const result = await signUp.create({
                emailAddress: formData.email,
                password: formData.password,
                firstName: formData.firstName,
                lastName: formData.lastName,
            });
            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                router.push("/dashboard");
            } else if (result.status === "needs_verification") {
                // Clerk may require email verification, handle as needed
                setError("Verifica tu correo para completar el registro.");
            } else {
                setError("No se pudo crear la cuenta. Intenta de nuevo.");
            }
        } catch (err: any) {
            setError(err.errors?.[0]?.message || "Error al crear la cuenta.");
        }
    }

    const handleSocialSignUp = (provider: "google" | "apple") => {
        if (!isLoaded) return;
        signUp.authenticateWithRedirect({
            strategy: provider === "google" ? "oauth_google" : "oauth_apple",
            redirectUrl: "/dashboard",
            redirectUrlComplete: "/dashboard",
        });
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Únete a Maze Bank
                </h1>
                <p className="text-gray-600">
                    Crea tu cuenta y comienza tu viaje financiero
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nombre
                        </label>
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-MazeRedColor transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Tu nombre"
                            />
                        </div>
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Apellido
                        </label>
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-MazeRedColor transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Tu apellido"
                            />
                        </div>
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>
                </div>
                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                    </label>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-MazeRedColor transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="tu@email.com"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>
                {/* Phone and ID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Teléfono
                        </label>
                        <div className="relative">
                            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-MazeRedColor transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Número de Identificación
                        </label>
                        <div className="relative">
                            <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="idNumber"
                                value={formData.idNumber}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-MazeRedColor transition-colors ${errors.idNumber ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="123-45-6789"
                            />
                        </div>
                        {errors.idNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.idNumber}</p>
                        )}
                    </div>
                </div>
                {/* Password */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contraseña
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full pr-12 pl-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-MazeRedColor transition-colors ${errors.password ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Mínimo 8 caracteres"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                </div>
                {/* Confirm Password */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirmar Contraseña
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full pr-12 pl-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-MazeRedColor transition-colors ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Confirma tu contraseña"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
                </div>
                {/* Terms and Conditions */}
                <div>
                    <label className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 text-MazeRedColor focus:ring-MazeRedColor border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-600">
                            Acepto los{" "}
                            <a href="/terms" className="text-MazeRedColor hover:underline">
                                términos y condiciones
                            </a>{" "}
                            y la{" "}
                            <a href="/privacy" className="text-MazeRedColor hover:underline">
                                política de privacidad
                            </a>{" "}
                            de Maze Bank
                        </span>
                    </label>
                    {errors.acceptTerms && (
                        <p className="text-red-500 text-sm mt-1">{errors.acceptTerms}</p>
                    )}
                </div>
                {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-MazeRedColor text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Crear Cuenta
                </button>
            </form>
            {/* Social Sign Up */}
            <div className="flex flex-col gap-4 mt-6">
                {/* Sign up w Google */}
                <button
                    type="button"
                    className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold bg-white hover:bg-blue-600 hover:text-white cursor-pointer items-center"
                    onClick={() => handleSocialSignUp("google")}
                >
                    Crear cuenta con Google
                    <span className="flex items-center justify-center">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48">
                            <g>
                                <path fill="#4285F4" d="M24 9.5c3.54 0 6.04 1.53 7.43 2.81l5.48-5.48C33.64 3.54 29.36 1.5 24 1.5 14.98 1.5 7.13 7.48 4.13 15.02l6.91 5.36C12.83 15.01 17.01 9.5 24 9.5z" />
                                <path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.43-4.74H24v9.24h12.43c-.54 2.9-2.18 5.36-4.66 7.02l7.18 5.59C43.87 37.02 46.1 31.25 46.1 24.5z" />
                                <path fill="#FBBC05" d="M10.96 28.14A14.5 14.5 0 0 1 9.5 24c0-1.44.25-2.83.7-4.14l-6.91-5.36A23.94 23.94 0 0 0 1.5 24c0 3.77.9 7.34 2.49 10.5l7.18-5.59z" />
                                <path fill="#EA4335" d="M24 46.5c6.36 0 11.7-2.1 15.6-5.73l-7.18-5.59c-2.01 1.35-4.59 2.17-8.42 2.17-6.99 0-11.17-5.51-12.96-10.88l-7.18 5.59C7.13 40.52 14.98 46.5 24 46.5z" />
                                <path fill="none" d="M1.5 1.5h45v45h-45z" />
                            </g>
                        </svg>
                    </span>
                </button>
                {/* Sign up w Apple */}
                <button
                    type="button"
                    className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold text-white bg-black hover:bg-blue-600 cursor-pointer items-center"
                    onClick={() => handleSocialSignUp("apple")}
                >
                    Crear cuenta con Apple
                    <FaApple className="w-6 h-6 mr-2" />
                </button>
            </div>
            {/* Login Link */}
            <div className="text-center mt-6">
                <p className="text-gray-600">
                    ¿Ya tienes una cuenta?{" "}
                    <a href="/sign-in" className="text-MazeRedColor hover:underline font-semibold">
                        Inicia sesión
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm