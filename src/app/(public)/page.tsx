import type { Metadata } from "next";

import BannerSlider from "./components/homepage/BannerSlider"
import OurProducts from "./components/homepage/OurProducts"
import WhatWeHaveForYou from "./components/homepage/WhatWeHaveForYou";
import OurCards from "./components/homepage/OurCards";
import FQA from "@/app/(public)/components/FQA";
import JoinUs from "./components/homepage/JoinUs";
import OurLocation from "./components/homepage/OurLocation";

import { faqData } from "@/mock/FAQs";

export const metadata: Metadata = {
    title: "MazeBank | Home Page",
    description: "MazeBank home page",
};

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Banner Slider */}
            <section>
                <BannerSlider />
            </section>
            {/* OurProducts */}
            <section>
                <OurProducts />
            </section>
            <div className="mx-auto max-w-[1400px] flex flex-col gap-10 px-4 pb-20 md:px-0">
                {/* OurCards */}
                <section>
                    <OurCards />
                </section>
                {/* WhatweHaveFotYou */}
                <section>
                    <WhatWeHaveForYou />
                </section>
            </div>
            <section>
                {/* JoinUs */}
                <JoinUs />
            </section>
            <div className="mx-auto max-w-[1400px] flex flex-col gap-10 px-4 md:px-0">
                {/* OurLocation */}
                <section>
                    <OurLocation />
                </section>
                {/* FQA */}
                <section>
                    <FQA faqItems={faqData} />
                </section>
            </div>
        </div>
    )
}