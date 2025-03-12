import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}