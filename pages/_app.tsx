import "../styles/globals.css";
import {useState, useEffect} from "react";
import type {AppProps} from "next/app";
import {wrapper} from "../store/index";
import Layout from "../components/layout/Layout";
import NextNProgress from "nextjs-progressbar";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSelector, useDispatch} from 'react-redux'
import Head from "next/head";
import {loadUser} from "../store/slice/authSlice";
import useAxios from "../hooks/useAxios";
import {useRouter} from "next/router";
import OverLayLoader from "../components/helper/OverLayLoader";

function MyApp({Component, pageProps, ...appProps}: AppProps) {
    const router = useRouter();
    const [screenLoading, setScreenLoading] = useState(false);
    const [routes, setRoutes] = useState({
        prev: '',
        curr: ''
    });
    const [theme, settheme] = useState(true);
    const state: any = useSelector((state) => state)
    const dispatch = useDispatch()
    const setPrevRoute = () => {
        setRoutes({ ...routes,prev:appProps.router.pathname})
        router.events.on('routeChangeStart', (url: string) => {
            console.log("routeChangeStart", url)
            setScreenLoading(true)
        });
        router.events.on('routeChangeComplete', (url: string) => {
            console.log("routeChangeComplete", url)
            setRoutes({ ...routes,curr:url})
            setScreenLoading(false)
        });
        router.events.on('routeChangeError', (err: any, url) => {
            console.log("routeChangeError", err, url)
            setScreenLoading(false)
        });
    }
    const setLightMode = () => {
        const mode = window.localStorage.getItem("lightMode")
        if(mode===null){
            window.localStorage.setItem("lightMode", "true")
        }
    }
    useEffect(() => {
        setLightMode()
        setRoutes({...routes, curr: appProps.router.pathname})
        // @ts-ignore
        dispatch(loadUser(''))
        if (window.localStorage.getItem("lightMode")) {
            settheme(
                window.localStorage.getItem("lightMode") === "true"
                    ? true
                    : false
            );
        }
    }, []);
    useEffect(() => {
        setPrevRoute()
        console.log("Route : ",routes)
        console.log("appProps.router.pathname : ",appProps.router.pathname)
        if ([`/login`, `/register`].includes(routes.prev)) {
            // @ts-ignore
            dispatch(loadUser(''))
        }
    }, [appProps.router.pathname]);
    return (
        <div data-theme={theme ? "pastelCustom" : "dark"}>
            <Head>
                <title>पसल - muiltivendor ecommerce</title>
                <meta property="og:title" content="My page title" key="nepali ecommerce"/>
            </Head>
            <ToastContainer />
            <NextNProgress/>
            {/*{screenLoading?<OverLayLoader text={`Loading...`}/>:null}*/}

            {
                [`/login`, `/register`].includes(appProps.router.pathname) ? (
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
