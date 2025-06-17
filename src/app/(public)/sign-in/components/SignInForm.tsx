"use client"
import { useState } from "react"

import Money from "@/assets/img/AccessImgs/money.jpeg"

const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log(formData)
    }

    return (
        <div className="bg-slate-50 flex flex-row w-full shadow-2xl mx-auto 600:rounded-2xl 600:max-w-[540px] xl:max-w-[1200px]">
            <div className="w-full mx-auto px-5 py-10 flex flex-col 600:px-16 600:py-16 xl:w-1/2 xl:px-24">
                <header className="font-semibold pb-4 text-center text-3xl 1000:text-4xl caret-transparent">
                    Log In
                </header>
                <form onSubmit={handleSubmit} className="caret-transparent">
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
                    <div className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold bg-white hover:bg-blue-600 hover:text-white">
                        Google
                        <img
                            // src={Google}
                            alt=""
                            className="size-6 "
                        />
                    </div>
                    <div className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold text-white bg-black hover:bg-blue-600">
                        Apple
                        <img
                            // src={Apple}
                            alt=""
                            className="size-6 invert"
                        />
                    </div>
                </div>
            </div>
            <div
                className="hidden bg-cover bg-center min-h-full rounded-tr-xl rounded-br-xl w-1/2 xl:flex"
                style={{ backgroundImage: `url(${Money.src})` }}
            >
            </div>
        </div>
    )
}

export default SignInForm