import React, { useState } from "react";
import { IoReturnDownForwardSharp } from "react-icons/io5";

function ProductQnaSection(props: any) {
	const { product: any } = props;
	return (
		<div className="container mx-auto lg:w-5/6 border border-base-content/10 my-2">
			<div className="collapse ">
				<input type="checkbox" className="peer" />
				<div className="collapse-title border border-primary text-primary font-bold p-1 sm:p-4 text-md sm:text-lg lg:text-xl  flex justify-between items-center">
					<p>Question & Answers</p>
					<button className="btn btn-sm btn-info z-30">Add Question</button>
				</div>
				<div className="collapse-content">
					<div className="review border border-base-content/10 mt-2 p-1 bg-base-200 rounded-sm	">
						<h2 className="font-bold underline">Ram thapa</h2>
						<div className="flex my-1 items-center justify-between">
							<div className="badge badge-success">answered</div>

							<p className="ml-3 text-sm"> 1 month ago</p>
						</div>
						<p className="">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Dolores cumque distinctio quidem, in doloru?
							laborum?
						</p>
						<div className="answers">
							<div className="ans  m-1 flex">
								<IoReturnDownForwardSharp className="text-lg" />
								<div className="p-1  border border-base-content/10 rounded-sm ml-1 bg-success text-success-content w-full">
									<div className="flex items-center justify-between">
										<h3 className="font-bold underline">
											chirag thapa
										</h3>
										<p className="ml-3 text-sm">
											1 months ago
										</p>
									</div>
									<p>yes we have it soo you can have it.</p>
								</div>
							</div>
							<div className="ans  m-1 flex">
								<IoReturnDownForwardSharp className="text-lg" />
								<div className="p-1  border border-base-content/10 rounded-sm ml-1 bg-success text-success-content w-full">
									<div className="flex items-center justify-between">
										<h3 className="font-bold underline">
											chirag thapa
										</h3>
										<p className="ml-3 text-sm">
											1 months ago
										</p>
									</div>
									<p>yes we have it soo you can have it.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review border border-base-content/10 mt-2 p-1 bg-base-200 rounded-sm	">
						<h2 className="font-bold underline">Ram thapa</h2>
						<div className="flex my-1 items-center justify-between">
							<div className="badge badge-error">not answered</div>

							<p className="ml-3 text-sm"> 1 month ago</p>
						</div>
						<p className="">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Dolores cumque distinctio quidem, in doloru?
							laborum?
						</p>
						<div className="answers">
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductQnaSection;
