import { Footer } from "@components/Footer";
import { Header } from "@components/Header";


const Layout = ({ children }) => {
    return(
        <>
        <Header />
        <main className="min-h-90vh py-2">
            {children}
        </main>
        <Footer/>
        </>
    );
}

export { Layout }