import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { wrapper } from "../store/index";
import Layout from "../components/layout/Layout";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
function MyApp({ Component, pageProps, ...appProps }: AppProps) {
	const [theme, settheme] = useState(true);
	useEffect(() => {
		if (window.localStorage.getItem("lightMode")) {
			settheme(
				window.localStorage.getItem("lightMode") === "true"
					? true
					: false
			);
		}
	}, []);
	return (
		<div data-theme={theme ? "light" : "dark"}>
			<Head>
				<title>पसल - muiltivendor ecommerce</title>
				<meta property="og:title" content="My page title" key="title" />
			</Head>
			<ToastContainer />
			<NextNProgress />
			{[`/login`].includes(appProps.router.pathname) ||
			[`/register`].includes(appProps.router.pathname) ? (
				<Component {...pageProps} />
			) : (
				<Layout theme={theme} settheme={settheme}>
					<Component {...pageProps} />
				</Layout>
			)}
		</div>
	);
}

export default wrapper.withRedux(MyApp);
