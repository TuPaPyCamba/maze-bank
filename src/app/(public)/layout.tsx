// Components
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import HelpChat from "./components/HelpChat"


export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header>
                <NavBar />
            </header>
            {children}
            <HelpChat />
            <Footer />
        </>
    )
}