import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Product } from "../../../utils/types/product";


type Props = {
	product: Product;
};

export default function ProductForm({ product }: Props) {
	const [content, setcontent] = useState("");
	const [tags, setTags] = useState([])
	const [images, setImages] = useState([])
	const [url, seturl]=useState("")

	const handleAddProduct = (values: any) => {
		console.log(values);
	};

	const handleImageUpload = () =>{
		
	}

	const formik = useFormik({
		initialValues: {
			name: product?.name || "",
			desc: product?.desc || "",
			unit: product?.unit || "piece",
			price: product?.price || 0,
			quantity: product?.quantity || 0,
		},
		onSubmit: (values) => {
			handleAddProduct(values);
		},
		validate: (values) => {
			let errors: {
				name: string;
				desc: string;
				price: string;
				quantity: string;
			} = {
				name:"",
				desc:"",
				price:"",
				quantity:"",
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
		<div className="w-full py-4">
			<div className="w-full flex justify-between">
				<div className="w-[48%] mx-auto">
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							id="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							type="text"
							placeholder="Name"
							className="input input-bordered w-full"
						/>
						<label className="label">
							<span className="label-text-alt text-error">
								{formik?.errors.name}
							</span>
						</label>
					</div>
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">Price</span>
						</label>
						<input
							id="price"
							value={formik.values.price}
							onChange={formik.handleChange}
							type="number"
							placeholder="00.00"
							className="input input-bordered w-full"
						/>
						<label className="label">
							<span className="label-text-alt text-error">
							{formik?.errors.price}
							</span>
						</label>
					</div>
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">Stock</span>
						</label>
						<input
							id="quantity"
							value={formik.values.quantity}
							onChange={formik.handleChange}
							type="number"
							placeholder="00.00"
							className="input input-bordered w-full"
						/>
						<label className="label">
							<span className="label-text-alt text-error">
							{formik?.errors.quantity}
							</span>
						</label>
					</div>
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">Categories</span>
						</label>
						<input
							type="text"
							placeholder="Men,Winter"
							className="input input-bordered w-full"
						/>
						<label className="label">
							<span className="label-text-alt text-info">
								Seperated by comma `,`
							</span>
						</label>
					</div>

					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">Measurement unit</span>
						</label>
						<select 
						id="unit"
						value={formik.values.unit}
						onChange={formik.handleChange}
						className="select select-bordered">
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
							<span className="label-text">Image</span>
						</label>
						<input type="file" className="input  w-full" />
						<label className="label">
							<span className="label-text-alt text-info">
								jpeg, png
							</span>
						</label>
					</div>
				</div>
				<div className="w-[48%] mx-auto">
					<img
						src="https://images.pexels.com/photos/5190599/pexels-photo-5190599.jpeg?auto=compress&cs=tinysrgb&w=600"
						className="w-full min-h-max object-cover"
						alt=""
					/>
					Add image
				</div>
			</div>
			<div className="w-full p-2 ">
				<h3 className="text-sm p-2">Description</h3>
				<ReactQuill
					theme="snow"
					style={{}}
					value={content}
					onChange={setcontent}
				/>
			</div>
		</div>
	);
}
