import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/index";
import Layout from "../components/layout/Layout";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ToastContainer />
			<NextNProgress />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default wrapper.withRedux(MyApp);
