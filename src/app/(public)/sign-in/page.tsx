import type { Metadata } from "next";

import SignInTheme from "@/assets/img/AccessImgs/theme.jpg"

import SignInForm from "./components/SignInForm";

export const metadata: Metadata = {
    title: "MazeBank | Sign In",
    description: "MazeBank",
};

export default function SignInPage() {
    return (
        <div className="min-h-screen">
            <section className="bg-cover w-full min-h-screen pt-24 flex items-center justify-center" style={{ backgroundImage: `url(${SignInTheme.src})` }} >
                {/* Form */}
                <SignInForm />
            </section>
            <div className="mx-auto max-w-[1400px] flex flex-col gap-10 px-4 md:px-0">
            </div>
        </div>
    )
}