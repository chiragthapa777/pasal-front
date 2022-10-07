import React, { useState } from "react";
import ReactStars from "react-stars";

function ProductReviewSection(props: any) {
	const { product: any } = props;
	return (
		<div className="container mx-auto lg:w-5/6 border border-base-content/10 my-2">
			<div className="collapse ">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-xl  flex justify-start items-center">
					Product Review & Rating
				</div>
				<div className="collapse-content">
					<div className="review border border-base-content/10 mt-4  p-1">
						<h2 className="font-bold underline">Ram thapa</h2>
						<div className="flex justify-start items-center">
							<ReactStars
								count={5}
								value={2.5}
								half={true}
								edit={false}
								size={18}
							/>
							<p className="ml-3 text-sm"> 1 month ago</p>
						</div>
						<p className="">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Dolores cumque distinctio quidem, in dolorum
							voluptatibus architecto porro! Officiis, non
							laborum?
						</p>
					</div>
					<div className="review border border-base-content/10 mt-2 p-1">
						<h2 className="font-bold underline">Ram thapa</h2>
						<div className="flex justify-start items-center">
							<ReactStars
								count={5}
								value={2.5}
								half={true}
								edit={false}
								size={18}
							/>
							<p className="ml-3 text-sm"> 1 month ago</p>
						</div>
						<p className="">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Dolores cumque distinctio quidem, in dolorum
							voluptatibus architecto porro! Officiis, non
							laborum?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductReviewSection;
