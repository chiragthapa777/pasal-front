import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/index";
import Layout from "../components/layout/Layout";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default wrapper.withRedux(MyApp);
