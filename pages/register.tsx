import { getCookie, setCookie } from "cookies-next";
import React, { useRef, useEffect } from "react";
import { baseUrl } from "../api/apiUrl";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import Link from "next/link";

type Props = {};

export default function register({}: Props) {
	const topRef: any = useRef(null);
	const axios = useAxios(getCookie("Ptoken"));
	const router = useRouter();

	useEffect(() => {
		topRef.current.scrollIntoView({ behavior: "auto" });
	}, []);

	const handleRegister = (val: any) => {
		axios
			.post(`${baseUrl}/auth/register`, val)
			.then((res) => {
				console.log(res);
				toast.success(
					`Successfully created account ${res.data.data.name}`,
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
			repassword: "",
			name: "",
			number: "",
		},
		onSubmit: (values) => {
			handleRegister(values);
		},
		validate: (values) => {
			let errors: any = {};
			if (!values.password) {
				errors.password = "Required!";
			} else if (
				!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&?@ "])[a-zA-Z0-9!#$%&@?]{8,20}$/.test(
					values.password
				)
			) {
				errors.password = "password should contain atleast one number, one special character, one capital character and length should be between 8 to 20";
			}
			if(!values.repassword){
				errors.repassword="Required!"
			}else if(values.repassword!==values.password){
				errors.repassword="Password doesnot match!"
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
			if (!values.name) {
				errors.name = "Required";
			}
			if (values.number && isNaN(Number(values.number))) {
				errors.number = "Invalid number!";
			}
			return errors;
		},
	});
	return (
		<div className="hero min-h-screen bg-base-200" ref={topRef}>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Sign Up</h1>
					<p className="py-6">
						PASAL is a muiltivendor ecommerce application where you
						can find every sort of thing. This website is one stop
						go for everything. You can buy product easily. If you
						want to be part of PASAL and want to make your store
						global be a part of our team and apply for vendor.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								value={formik.values.name}
								onChange={formik.handleChange}
								id="name"
								type="text"
								className="input input-bordered"
							/>
							<label className="label">
								<span className="label-text-alt text-error">
									{formik.errors?.name}
								</span>
							</label>
						</div>
						<form onSubmit={formik.handleSubmit}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									value={formik.values.email}
									onChange={formik.handleChange}
									id="email"
									type="text"
									className="input input-bordered"
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.email}
									</span>
								</label>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Phone Number
									</span>
								</label>
								<input
									value={formik.values.number}
									onChange={formik.handleChange}
									id="number"
									type="text"
									className="input input-bordered"
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.number}
									</span>
								</label>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									value={formik.values.password}
									onChange={formik.handleChange}
									id="password"
									type="password"
									className="input input-bordered"
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.password}
									</span>
								</label>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Re-enter Password</span>
								</label>
								<input
									value={formik.values.repassword}
									onChange={formik.handleChange}
									id="repassword"
									type="password"
									className="input input-bordered"
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.repassword}
									</span>
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									className={`btn btn-primary ${
										formik.isSubmitting ? "loading" : ""
									}`}
								>
									Sign up
								</button>
							</div>
						</form>
						<p className="text-xs">
							{" "}
							Already have an account?{" "}
							<span className="link text-blue-400">
								<Link href={"/login"}>click here</Link>
							</span>{" "}
							to login
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
