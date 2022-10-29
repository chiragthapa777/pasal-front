import React from "react";
import parse from "html-react-parser";
// import ReactQuill from "react-quill";

export default function ProductDescription(props: any) {
	const { product } = props;
	return (
		<div className="container mx-auto lg:w-5/6  border-base-content/10 my-2">
			<h1 className="sm:text-lg lg:text-xl text-primary font-bold border border-primary px-4 py-5">
				Product Description
			</h1>
			<div className="border border-base-content/10 p-4">
				{parse(
					"<ul><li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempora!</li><li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempora!</li><li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempora!</li><li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempora!</li></ul>"
				)}
				{/* <ReactQuill
					value={
						"<ul><li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempora!</li><li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempora!</li><li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempora!</li><li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, tempora!</li></ul>"
					}
					readOnly={true}
					theme={"bubble"}
				/> */}
			</div>
		</div>
	);
}
