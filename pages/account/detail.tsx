import { getCookie } from "cookies-next";
import Link from "next/link";
import React, {useState} from "react";
import { MdHomeFilled, MdManageAccounts, MdTextSnippet } from "react-icons/md";
import AccountNav from "../../components/account/AccountNav";
// import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { baseUrl } from "../../api/apiUrl";
import Error from "../../components/helper/Error";
import { useFormik } from "formik";
import { toast } from "react-toastify";

type Props = {};

export default function detail({ data, error }: any) {
	const [loading, setloading] = useState(false);
	const axios = useAxios(getCookie("Ptoken"));
	if (error !== "") {
		return <Error message={error} />;
	}
	const formik = useFormik({
		initialValues: {
			name: data?.name,
			email: data?.email,
			number: data?.number,
			role: data?.role,
		},
		onSubmit: (values) => {
			if (
				values.name === data.name &&
				values.email === data.email &&
				values.number === data.number
			) {
				toast.info(`Data has not been changed`, {
					theme:
						window.localStorage.getItem("lightMode") === "true"
							? "light"
							: "dark",
				});
			} else {
				delete values.role;
				setloading(true);
				axios
					.put(`${baseUrl}/users/${data.id}`, {...values,number:values.number.toString()})
					.then((res) => {
						toast.success(`Data updated successfully`, {
							theme:
								window.localStorage.getItem("lightMode") ===
								"true"
									? "light"
									: "dark",
						});
						console.log(res)
						setloading(false);
						data = res.data.data;
					})
					.catch((err) => {
						toast.error(`${err?.response?.data?.data}`, {
							theme:
								window.localStorage.getItem("lightMode") ===
								"true"
									? "light"
									: "dark",
						});
						setloading(false);
						formik.resetForm()
					});
			}
		},
		validate: (values) => {
			let errors: any = {};
			// if (!values.password) {
			// 	errors.password = "Required!";
			// }
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
						<MdTextSnippet className="mr-1 my-auto" />
						<Link href="/account/detail" className="my-auto">
							Information
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
						information
					</h1>
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
							/>
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
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text uppercase">
									Number
								</span>
							</label>
							<input
								value={formik.values.number}
								onChange={formik.handleChange}
								id="number"
								type="number"
								placeholder="Number"
								className="input input-bordered input-sm input-wide w-full md:w-[70%]"
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text uppercase">
									Role
								</span>
							</label>
							<input
								value={formik.values.role}
								onChange={formik.handleChange}
								id="role"
								disabled={true}
								type="text"
								placeholder="Role"
								className="input input-bordered input-sm input-wide w-full md:w-[70%]"
							/>
						</div>
						<button
							className={`btn btn-sm mt-3 btn-info ${loading?"loading":""}`}
							type="submit"
						>
							Save
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export async function getServerSideProps({ req, res }: any) {
	const axios = useAxios(getCookie("Ptoken", { req, res }));
	let error = "";
	let data = {};
	try {
		const res = await axios.get(`${baseUrl}/users/loggedin`, {
			withCredentials: true,
		});
		data = res.data.data;
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
