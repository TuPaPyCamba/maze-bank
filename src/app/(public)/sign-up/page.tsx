import type { Metadata } from "next";

import Back from "@/assets/img/back.png"

import SignUpForm from "./components/SignUpForm";

export const metadata: Metadata = {
    title: "MazeBank | Sign In",
    description: "MazeBank",
};

export default function SignUpPage() {
    return (
        <div className="w-full">
            <section className="pt-44 pb-28" style={{ backgroundImage: `url(${Back.src})` }}>
                <SignUpForm />
            </section>
            <div className="mx-auto max-w-[1400px] flex flex-col gap-10 px-4 md:px-0">

            </div>
        </div>
    )
}