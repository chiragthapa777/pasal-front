import React, { useState, useEffect } from "react";
import ProductForm from "../../components/vendor/product/ProductForm";
import VendorNav from "../../components/vendor/VendorNav";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Input from "../../components/helper/formElements/Input";
import Error from "../../components/helper/Error";
import { baseUrl } from "../../api/apiUrl";
import MultiSelect from "../../components/helper/formElements/MultiSelect";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import { getCookie } from "cookies-next";
import Loader from "../../components/helper/Loader";
import { useRouter } from "next/router";

type Props = {};

export default function addproduct({}: Props) {
	const router = useRouter();
	const axios = useAxios(getCookie("Ptoken"));
	const [desc, setdesc] = useState("");
	const [tags, setTags] = useState([]);
	const [selectedTags, setselectedTags] = useState([]);
	const [images, setImages] = useState<any>([]);
	const [url, seturl] = useState("");
	const [loading, setloading] = useState(false);
	const [loadingimg, setloadingimg] = useState(false);
	const [error, seterror] = useState("");

	/**
	 * This a function to add product
	 */
	const handleAddProduct = () => {
		const body :any ={
			...formik.values,
			desc,
			images,
			tags: selectedTags.map((tag: any) => tag.name),
		}
		console.log(body);
		axios
			.post(`${baseUrl}/product`, body)
			.then((res) => {
				console.log(res);
				toast.success(`New product added successfully`, {
					theme:
						window.localStorage.getItem("lightMode") === "true"
							? "light"
							: "dark",
				});
				formik.setSubmitting(false);
				if (getCookie("Ptoken")) {
					router.push("/vendor/product");
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

	/**
	 * This is a funciton to upload image
	 * @param e 
	 */
	const onImageChange = async (e: any) => {
		const data = new FormData();
		data.append("file", e.target.files[0]);
		true;
		setloadingimg(true);
		axios
			.post(`${baseUrl}/upload/uploadImage`, data)
			.then((res: any) => {
				setloadingimg(false);
				// setPost({ ...post, imageId: res.data.data.id });
				setImages([
					...images,
					{
						url: res.data.data.secure_url,
						public_url: res.data.data.public_id,
						desc: "",
					},
				]);
			})
			.catch((err) => {
				setloadingimg(false);
				toast.error(`${err.response.data.data}`, {
					theme:
						window.localStorage.getItem("lightMode") === "true"
							? "light"
							: "dark",
				});
				// setimageLoading(false);
			});
		const [file] = e.target.files;
		seturl(URL.createObjectURL(file));
	};

	/**
	 *This is a function to load tags from server 
	 */
	const getTags = async () => {
		try {
			setloading(true);
			const tagRes: any = await axios.get(`${baseUrl}/tag`);
			setloading(false);
			console.log(tagRes.data.data);
			setTags(tagRes.data.data);
		} catch (error: any) {
			setloading(false);
			seterror(error?.response?.data.data);
		}
	};

	useEffect(() => {
		getTags();
	}, []);

	if (error) {
		<Error message={error} />;
	}

	const formik = useFormik({
		initialValues: {
			name: "",
			desc: "",
			unit: "piece",
			price: 0,
			quantity: 0,
		},
		onSubmit: (values) => {
			console.log("submitting");
		},
		validate: (values) => {
			let errors: {
				name: string;
				desc: string;
				price: string;
				quantity: string;
			} = {
				name: "",
				desc: "",
				price: "",
				quantity: "",
			};
			if (!values.name) {
				errors.name = "Name is required!";
			}
			if (!values.desc) {
				errors.desc = "Descprition is required!";
			}
			if (!values.price) {
				errors.price = "Required!";
			} else if (values.price < 1) {
				errors.price = "Price should be bigger than 0";
			}
			if (!values.quantity) {
				errors.quantity = "Required!";
			} else if (values.quantity < 1) {
				errors.quantity = "Quantity should be bigger than 1";
			}
			return errors;
		},
	});

	return (
		<>
			<VendorNav basePath={"addproduct"} />
			<form onSubmit={formik.handleSubmit}>
				<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						Add Product
					</h1>
					<div className="w-full py-4">
						<div className="w-full flex justify-between">
							<div className="w-[48%] mx-auto">
								<Input
									value={formik.values.name}
									id="name"
									placeholder="Name"
									error={formik?.errors.name}
									onChange={formik.handleChange}
									type="text"
									info=""
									title="Name"
								/>
								<Input
									value={formik.values.price}
									id="price"
									placeholder="Price"
									error={formik?.errors.price}
									onChange={formik.handleChange}
									type="number"
									info=""
									title="Price"
								/>
								<Input
									value={formik.values.quantity}
									id="quantity"
									placeholder="Quantity"
									error={formik?.errors.quantity}
									onChange={formik.handleChange}
									type="number"
									info=""
									title="Quantity"
								/>
								<div className="form-control w-full ">
									<label className="label">
										<span className="label-text">
											Measurement unit
										</span>
									</label>
									<select
										id="unit"
										value={formik.values.unit}
										onChange={formik.handleChange}
										className="select select-bordered"
									>
										<option>piece</option>
										<option>box</option>
										<option>dozen</option>
										<option>cm</option>
										<option>mm</option>
										<option>m</option>
										<option>km</option>
										<option>g</option>
										<option>kg</option>
										<option>tone</option>
										<option>tolla</option>
										<option>aana</option>
										<option>m²</option>
										<option>cm²</option>
										<option>km²</option>
										<option>mm²</option>
										<option>m³</option>
										<option>cm³</option>
										<option>km³</option>
										<option>mm³</option>
									</select>
									<label className="label">
										<span className="label-text-alt text-info">
											example : piece, box, kg, meter etc
										</span>
									</label>
								</div>
								<div className="form-control w-full ">
									<label className="label">
										<span className="label-text">
											Categories
										</span>
									</label>
									<MultiSelect
										loading={loading}
										setSelect={setselectedTags}
										selects={selectedTags}
										list={tags}
										setlist={setTags}
									/>
								</div>
								<div className="form-control w-full ">
									<label className="label">
										<span className="label-text">
											Image
										</span>
									</label>
									<input
										type="file"
										accept=".png, .jpg, .jpeg"
										onChange={onImageChange}
									/>
									<label className="label">
										<span className="label-text-alt text-info">
											jpeg, png
										</span>
									</label>
								</div>
							</div>
							<div className="w-[48%] mx-auto">
								{url ? (
									<div className="w-full h-full relative">
										{loadingimg ? (
											<div className="bg-base-200 absolute w-full h-full opacity-60 flex justify-center items-center">
												<Loader />
											</div>
										) : null}

										<img
											src={url}
											className="w-full min-h-max object-cover my-auto"
											alt=""
										/>
									</div>
								) : (
									"Add Image"
								)}
							</div>
						</div>
						<div className="w-full p-2 ">
							<h3 className="text-sm p-2">Description</h3>
							<ReactQuill
								theme="snow"
								value={desc}
								onChange={setdesc}
							/>
						</div>
					</div>
					<div className="mx-2 my-1">
						<button
							className={`btn btn-primary ${
								formik.isSubmitting || loading || loadingimg
									? "loading"
									: ""
							}`}
							type="submit"
							onClick={handleAddProduct}
						>
							Add Product
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
