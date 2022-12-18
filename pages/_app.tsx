import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { wrapper } from "../store/index";
import Layout from "../components/layout/Layout";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from 'react-redux'
import Head from "next/head";
import {loadUser} from "../store/slice/authSlice";
import useAxios from "../hooks/useAxios";
function MyApp({ Component, pageProps, ...appProps }: AppProps) {
	const [theme, settheme] = useState(true);
	const state:any =useSelector((state)=>state)
	console.log("Yoo state hoo",state.auth)
	const dispatch = useDispatch()
	useEffect(() => {
		// @ts-ignore
		dispatch(loadUser('ahahahah'))
		if (window.localStorage.getItem("lightMode")) {
			settheme(
				window.localStorage.getItem("lightMode") === "true"
					? true
					: false
			);
		}
	}, []);
	return (
		<div data-theme={theme ? "pastelCustom" : "dark"}>
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
