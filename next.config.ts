import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "www.pcmgames.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "media-rockstargames-com.akamaized.net",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "img.clerk.com",
                port: "",
                pathname: "/**"
            }
        ]
    }
}

export default nextConfig
