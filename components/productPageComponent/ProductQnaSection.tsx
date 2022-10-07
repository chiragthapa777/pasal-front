import React, { useState } from "react";

function ProductQnaSection(props: any) {
	const { product: any } = props;
	return (
			<div className="container mx-auto lg:w-5/6 border border-base-content/10 my-2">
			<div className="collapse ">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-xl  flex justify-start items-center">
					Question & Answers
				</div>
				<div className="collapse-content">
    content
				</div>
			</div>
		</div>
	);
}

export default ProductQnaSection;
