import { getCookie } from "cookies-next";
import Link from "next/link";
import React from "react";
import {
	MdHomeFilled,
	MdManageAccounts,
	MdStoreMallDirectory,
	MdNavigateNext,
} from "react-icons/md";
import AccountNav from "../../components/account/AccountNav";
import useAxios from "../../hooks/useAxios";
import jwt_decode from "jwt-decode";
import { baseUrl } from "../../api/apiUrl";
import { toast } from "react-toastify";
import { useFormik } from "formik";

type data = {
	name?: string;
	email?: string;
	desc?: string;
	pan?: string;
};

export default function seller({ data:data }: any) {
	const axios = useAxios(getCookie("Ptoken"));
	const formik = useFormik({
		initialValues: {
			name: data?.name || "",
			email: data?.email || "",
			desc: data?.desc || "",
			pan: data?.pan || "",
		},
		onSubmit: (values) => {
			axios
				.post(`${baseUrl}/vendor`, values)
				.then((res) => {
					toast.success(`Vendor request send successfully`, {
						theme:
							window.localStorage.getItem("lightMode") === "true"
								? "light"
								: "dark",
					});
					console.log(res);
					formik.setSubmitting(false);
					data = res.data.data;
				})
				.catch((err) => {
					toast.error(`${err?.response?.data?.data}`, {
						theme:
							window.localStorage.getItem("lightMode") === "true"
								? "light"
								: "dark",
					});
					formik.resetForm();
					formik.setSubmitting(false);
				});
		},
		validate: (values) => {
			let errors: any = {};
			if (!values.name) {
				errors.name = "Required!";
			}
			if (!values.pan) {
				errors.pan = "Required!";
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
		<div className={"accountCss lg:max-w-[1200px] container mx-auto p-1"}>
			{/* upper navigation */}
			<div className="text-sm breadcrumbs text-info">
				<ul className="lg:max-w-[1200px] container">
					<li className="cursor-pointer hover:underline">
						<MdHomeFilled className="mr-1 my-auto" />
						<Link href="/" className="my-auto">
							Home
						</Link>
					</li>
					<li className="cursor-pointer hover:underline">
						<MdManageAccounts className="mr-1 my-auto" />
						<Link href="/account" className="my-auto">
							Account
						</Link>
					</li>
					<li className="cursor-pointer hover:underline">
						<MdStoreMallDirectory className="mr-1 my-auto" />
						<Link href="/account/order" className="my-auto">
							Apply for Vendor
						</Link>
					</li>
				</ul>
			</div>
			<section className="flex justify-center  items-start content-start">
				<div className="w-[30%] hidden md:block mr-2">
					<AccountNav />
				</div>
				<div className="w-full bg-base-100 drop-shadow-sm px-2 py-4 rounded-md">
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						Apply for vendor (seller)
					</h1>
					{data?.requestAccepted === false && (
						<p className="text-info">
							Your vendor request is pending
						</p>
					)}
					<div className="CompanyDetail">
						<form onSubmit={formik.handleSubmit}>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text uppercase">
										Name
									</span>
								</label>
								<input
									value={formik.values.name}
									onChange={formik.handleChange}
									id="name"
									type="text"
									placeholder="Name"
									className="input input-bordered input-sm input-wide w-full md:w-[70%]"
									disabled={
										data?.requestAccepted === false
											? true
											: false
									}
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.name}
									</span>
								</label>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text uppercase">
										Pan Number
									</span>
								</label>
								<input
									value={formik.values.pan}
									onChange={formik.handleChange}
									id="pan"
									type="text"
									placeholder="Pan Number"
									className="input input-bordered input-sm input-wide w-full md:w-[70%]"
									disabled={
										data?.requestAccepted === false
											? true
											: false
									}
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.pan}
									</span>
								</label>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text uppercase">
										Email
									</span>
								</label>
								<input
									value={formik.values.email}
									onChange={formik.handleChange}
									id="email"
									type="email"
									placeholder="Email"
									className="input input-bordered input-sm input-wide w-full md:w-[70%]"
									disabled={
										data?.requestAccepted === false
											? true
											: false
									}
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.email}
									</span>
								</label>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text uppercase">
										Decription
									</span>
								</label>
								<textarea
									value={formik.values.desc}
									onChange={formik.handleChange}
									id="desc"
									placeholder="Decription"
									className="textarea  textarea-bordered  input-wide w-full md:w-[70%]"
									disabled={
										data?.requestAccepted === false
											? true
											: false
									}
								/>
								<label className="label">
									<span className="label-text-alt text-error">
										{formik.errors?.desc}
									</span>
								</label>
							</div>
							<button
								className={`btn btn-sm mt-3 btn-info ${
									formik.isSubmitting ? "loading" : ""
								}`}
								type="submit"
							>
								Apply <MdNavigateNext className="text-lg" />
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}

export async function getServerSideProps({ req, res }: any) {
	const token: any = getCookie("Ptoken", { req, res });
	const axios = useAxios(token);
	const decoded: any = jwt_decode(token);
	let error = "";
	let data: any = null;
	if (!decoded.id) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
	if (decoded?.vendorId) {
		const vendor: any = await axios.get(
			`${baseUrl}/vendor/${decoded.vendorId}`
		);
		data = vendor.data.data;
		if (data.requestAccepted) {
			return {
				redirect: {
					destination: "/vendor",
					permanent: false,
				},
			};
		}
	} else {
		const vendor: any = await axios.get(
			`${baseUrl}/vendor/?userId=${decoded.id}`
		);
		data = vendor.data.data[0] || {};
		if (data.requestAccepted) {
			return {
				redirect: {
					destination: "/vendor",
					permanent: false,
				},
			};
		}
	}
	return {
		props: {
			data,
		},
	};
}
