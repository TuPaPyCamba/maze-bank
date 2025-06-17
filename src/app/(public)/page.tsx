import type { Metadata } from "next";

import BannerSlider from "./components/homepage/BannerSlider"
import OurProducts from "./components/homepage/OurProducts"
import WhatWeHaveForYou from "./components/homepage/WhatWeHaveForYou";
import OurCards from "./components/homepage/OurCards";
import FQA from "@/app/(public)/components/FQA";
import { faqData } from "@/mock/FAQs";

export const metadata: Metadata = {
    title: "MazeBank | Home Page",
    description: "MazeBank home page",
};

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Banner Slider */}
            <BannerSlider />
            {/* OurProducts */}
            <OurProducts />
            <div className="mx-auto max-w-[1400px] flex flex-col gap-10 px-4 md:px-0">
                {/* OurCards */}
                <OurCards />
                {/* WhatweHaveFotYou */}
                <WhatWeHaveForYou />
                {/* FQA */}
                <FQA faqItems={faqData} />
            </div>
        </div>
    )
}