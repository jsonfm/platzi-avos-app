import '../styles/globals.css';
import { Layout } from "../components/Layout";
import { SWRConfig } from "swr";


const App = ({ Component, pageProps }) => {
    return(
        <SWRConfig value={{fallback: pageProps.fallback}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    )
}

export default App;