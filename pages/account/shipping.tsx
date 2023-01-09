import Link from "next/link";
import React, { useState } from "react";
import { MdHomeFilled, MdManageAccounts } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import AccountNav from "../../components/account/AccountNav";
import jwt_decode from "jwt-decode";
import useAxios from "../../hooks/useAxios";
import { getCookie } from "cookies-next";
import { baseUrl } from "../../api/apiUrl";
import Error from "../../components/helper/Error";
import { useFormik } from "formik";
import { toast } from "react-toastify";

type Props = {};

export default function shipping({ data, error }: any) {
	const axios = useAxios(getCookie("Ptoken"));
	if (error !== "") {
		return <Error message={error} />;
	}
	const formik = useFormik({
		initialValues: {
			country: data?.country || "",
			province: data?.province || "",
			district: data?.district || "",
			ward: data?.ward || "",
			street: data?.street || "",
			phone: data?.phone || "",
		},
		onSubmit: (values) => {
			const method=data?.id ? "put" : "post"
			axios[method](`${baseUrl}/shipping`, values)
				.then((res) => {
					toast.success(`Shipping address updated successfully`, {
						theme:
							window.localStorage.getItem("lightMode") === "true"
								? "light"
								: "dark",
					});
					data = res.data.data;
					formik.setSubmitting(false)
				})
				.catch((err) => {
					toast.error(`${err?.response?.data?.data}`, {
						theme:
							window.localStorage.getItem("lightMode") === "true"
								? "light"
								: "dark",
					});
					formik.resetForm();
					formik.setSubmitting(false)
				});
		},
		validate: (values) => {
			let errors: any = {};
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
						<HiLocationMarker className="mr-1 my-auto" />
						<Link href="/account/shipping" className="my-auto">
							Shipping
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
						shipping address
					</h1>
					<form onSubmit={formik.handleSubmit}>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">
								Country
							</span>
						</label>
						<input
							value={formik.values.country}
							onChange={formik.handleChange}
							id="country"
							type="text"
							placeholder="country"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">
								Province
							</span>
						</label>
						<input
							value={formik.values.province}
							onChange={formik.handleChange}
							id="province"
							type="text"
							placeholder="Province"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">
								District
							</span>
						</label>
						<input
							value={formik.values.district}
							onChange={formik.handleChange}
							id="district"
							type="text"
							placeholder="District"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">
								Ward Number
							</span>
						</label>
						<input
							value={formik.values.ward}
							onChange={formik.handleChange}
							id="ward"
							type="text"
							placeholder="Ward Number"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Street</span>
						</label>
						<input
							value={formik.values.street}
							onChange={formik.handleChange}
							id="street"
							type="text"
							placeholder="Street"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text uppercase">Phone number</span>
						</label>
						<input
							value={formik.values.phone}
							onChange={formik.handleChange}
							id="phone"
							type="text"
							placeholder="Street"
							className="input input-bordered input-sm input-wide w-full md:w-[70%]"
						/>
					</div>
					<button className={`btn btn-sm mt-3 btn-info ${formik.isSubmitting?"loading":""}`} type="submit">Save</button>
					</form>
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
	let data = null;
	try {
		const res = await axios.get(`${baseUrl}/shipping/?userId=${decoded.id}`);
		data = res.data.data[0] || {};
	} catch (err: any) {
		if (err?.response?.data?.data === "Login first !!!") {
			return {
				redirect: {
					destination: "/login",
					permanent: false,
				},
			};
		}
		error = err?.response?.data?.data;
	}
	return {
		props: {
			data,
			error,
		},
	};
}
