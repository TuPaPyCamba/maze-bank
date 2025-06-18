"use client"
import { useState } from "react"
import { useSignIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

import Money from "@/assets/img/AccessImgs/money.jpeg"
import { FaApple } from "react-icons/fa"

const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState<string | null>(null)
    const { isLoaded, signIn, setActive } = useSignIn();
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        if (!isLoaded) return;
        try {
            const result = await signIn.create({
                identifier: formData.email,
                password: formData.password,
            });
            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                router.push("/dashboard");
            } else {
                setError("Verifica tus datos e inténtalo de nuevo.");
            }
        } catch (err: any) {
            setError(err.errors?.[0]?.message || "Error al iniciar sesión.");
        }
    }

    const handleSocialSignIn = (provider: "google" | "apple") => {
        if (!isLoaded) return;
        signIn.authenticateWithRedirect({
            strategy: provider === "google" ? "oauth_google" : "oauth_apple",
            redirectUrl: "/dashboard",
            redirectUrlComplete: "/dashboard",
        });
    };

    return (
        <div className="bg-slate-50 flex flex-row w-full shadow-2xl mx-auto 600:rounded-2xl 600:max-w-[540px] xl:max-w-[1200px]">
            <div className="w-full mx-auto px-5 py-10 flex flex-col 600:px-16 600:py-16 xl:w-1/2 xl:px-24">
                <header className="font-semibold pb-4 text-center text-3xl 1000:text-4xl caret-transparent">
                    Log In
                </header>
                <form onSubmit={handleSubmit} className="caret-transparent">
                    {/* Email */}
                    <div className="w-full flex flex-col">
                        <label className="block font-semibold mb-2 w-full">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded hover:border-MazeRedColor"
                            type="email"
                            placeholder="MazeBank@correo.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Password */}
                    <div className="w-full flex flex-col pb-5">
                        <label className="block font-semibold mb-2 w-full pt-2">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded hover:border-MazeRedColor"
                            type="password"
                            placeholder="Money12345"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
                    {/* SendFormButton */}
                    <button
                        type="submit"
                        className="w-full py-2 shadow-md bg-MazeRedColor text-white font-bold rounded hover:bg-slate-700 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>
                {/* "OR" section */}
                <div className="flex flex-row gap-2 my-6">
                    <div className="h-px my-auto bg-slate-500 w-full">
                    </div>
                    <div>or</div>
                    <div className="h-px my-auto bg-slate-500 w-full">
                    </div>
                </div>
                {/* Login with other services */}
                <div className="flex flex-col gap-4">
                    {/* Sign in w Google */}
                    <div
                        className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold bg-white hover:bg-blue-600 hover:text-white cursor-pointer"
                        onClick={() => handleSocialSignIn("google")}
                    >
                        Sign In with Google
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
                    </div>
                    {/* Sign in w Apple */}
                    <div
                        className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold text-white bg-black hover:bg-blue-600 cursor-pointer"
                        onClick={() => handleSocialSignIn("apple")}
                    >
                        Sign In with Apple
                        <FaApple className="w-6 h-6 mr-2" />
                    </div>
                </div>
            </div>
            {/* decorative Section */}
            <div
                className="hidden bg-cover bg-center min-h-full rounded-tr-xl rounded-br-xl w-1/2 xl:flex"
                style={{ backgroundImage: `url(${Money.src})` }}
            >
            </div>
        </div>
    )
}

export default SignInForm