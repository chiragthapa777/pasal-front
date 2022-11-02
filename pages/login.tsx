import { useFormik } from "formik";
import { GetServerSidePropsContext } from "next";
import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../api/apiUrl";
import axios from "axios";

import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/router.js";
import Link from "next/link";
// import useAxios from "../hooks/useAxios";

type Props = {};

export default function login({}: Props) {
	// const axios = useAxios()
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const topRef: any = useRef(null);
	useEffect(() => {
		topRef.current.scrollIntoView({ behavior: "auto" });
	}, []);

	const handleLogin = (val: any) => {
		axios
			.post(`${baseUrl}/auth/login`, val)
			.then((res) => {
				console.log(res);
				toast.success(
					`Successfully logged in as ${res.data.data.name}`,
					{
						theme:
							window.localStorage.getItem("lightMode") === "true"
								? "light"
								: "dark",
					}
				);
				setCookie("Ptoken", res.data.data.token);
				formik.setSubmitting(false);
				if (getCookie("Ptoken")) {
					router.push("/");
				}
			})
			.catch((err) => {
				formik.setSubmitting(false);
				toast.error(err?.response?.data?.data, {
					theme:
						window.localStorage.getItem("lightMode") === "true"
							? "light"
							: "dark",
				});
			});
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			handleLogin(values);
		},
		validate: (values) => {
			let errors: any = {};
			if (!values.password) {
				errors.password = "Required!";
			}
			if (!values.email) {
				errors.email = "Required!";
			} else if (
				!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
					values.email
				)
			) {
				errors.email = "Invalid email format!";
			}
			return errors;
		},
	});

	return (
		<div className="hero min-h-screen bg-base-200" ref={topRef}>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold text-primary">
						<Link href={"/"}>Pasal</Link>
					</h1>
					<p className="py-6">
						PASAL is a muiltivendor ecommerce application where you
						can find every sort of thing. This website is one stop
						go for everything. You can buy product easily. If you
						want to be part of PASAL and want to make your store
						global be a part of our team and apply for vendor.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={formik.handleSubmit}>
						<div className="card-body">
							<h1 className="text-4xl font-bold text-primary text-center mx-auto ">
								Login
							</h1>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									id="email"
									type="text"
									placeholder="email"
									className="input input-bordered"
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.email}
									</span>
								</label>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									id="password"
									value={formik.values.password}
									onChange={formik.handleChange}
									type="password"
									placeholder="password"
									className="input input-bordered"
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.password}
									</span>
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									className={`btn btn-primary ${
										formik.isSubmitting ? "loading" : ""
									}`}
									type="submit"
								>
									Login
								</button>
							</div>
							<p className="text-xs">
								{" "}
								New to PASAL?{" "}
								<span className="link text-blue-400">
									<Link href={"/register"}>click here</Link>
								</span>{" "}
								to create a account
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps({ req, res }: any) {
	// setCookie('test', 'value', { req, res, maxAge: 60 * 6 * 24 });
	// getCookie('test', { req, res });
	// getCookies({ req, res });
	// deleteCookie('test', { req, res });
	console.log(getCookie("Ptoken", { req, res }));
	return {
		props: {},
	};
}
