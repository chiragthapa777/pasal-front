import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {};

export default function ProductForm({}: Props) {
	const [content, setcontent] = useState("");
	return (
		<div className="w-full py-4">
			<div className="w-full flex justify-between">
				<div className="w-[48%] mx-auto">
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							type="text"
							placeholder="Name"
							className="input input-bordered w-full"
						/>
						<label className="label">
							<span className="label-text-alt text-info">
								information
							</span>
						</label>
					</div>
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">Price</span>
						</label>
						<input
							type="Number"
							placeholder="00.00"
							className="input input-bordered w-full"
						/>
						<label className="label">
							<span className="label-text-alt text-info">
								information
							</span>
						</label>
					</div>
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text">Measurement Unit</span>
						</label>
						<input
							type="text"
							placeholder="Piece"
							className="input input-bordered w-full"
						/>
						<label className="label">
							<span className="label-text-alt text-info">
								example : piece, box, kg, meter etc
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
							<span className="label-text">Product Group</span>
						</label>
						<select className="select select-bordered">
							<option disabled selected>
								Pick one
							</option>
							<option>Star Wars</option>
							<option>Harry Potter</option>
							<option>Lord of the Rings</option>
							<option>Planet of the Apes</option>
							<option>Star Trek</option>
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
					{/* <img
						src="https://images.pexels.com/photos/5190599/pexels-photo-5190599.jpeg?auto=compress&cs=tinysrgb&w=600"
						className="w-full min-h-max object-cover"
						alt=""
					/> */}
                    Add image
				</div>
			</div>
            <div className="w-full p-2 ">
                <h3 className="text-sm p-2">Description</h3>
			    <ReactQuill theme="snow" value={content} onChange={setcontent} />
            </div>
		</div>
	);
}
