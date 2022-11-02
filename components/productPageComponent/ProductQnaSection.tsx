import moment from "moment";
import React, { useState } from "react";
import { IoReturnDownForwardSharp } from "react-icons/io5";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

function ProductQnaSection(props: any) {
	const [open, setopen] = useState(false);
	const { product } = props;
	return (
		<div className="container mx-auto lg:w-5/6 border border-base-content/10 my-2">
			<div className="collapse ">
				<input
					type="checkbox"
					className="peer"
					onClick={() => {
						setopen(!open);
					}}
				/>
				<div className="collapse-title border border-primary text-primary font-bold p-1 sm:p-4 text-md sm:text-lg lg:text-xl  flex justify-between items-center">
					<p className="flex gap-2">
						Question & Answers({product?.questions?.length || 0}){" "}
						{open ? (
							<MdExpandLess className="my-auto text-2xl" />
						) : (
							<MdExpandMore className="my-auto text-2xl" />
						)}
					</p>
					<button className="btn btn-sm btn-primary z-30">
						Add Question
					</button>
				</div>
				<div className="collapse-content">
					{product?.questions?.length
						? product.questions.map((q: any) => {
								return (
									<div
										key={q.id}
										className="review border border-base-content/10 mt-2 p-1 bg-base-200 rounded-sm	"
									>
										<h2 className="font-bold underline">
											{q?.user?.name}
										</h2>
										<div className="flex my-1 items-center justify-between">
											<div
												className={`badge badge-success ${
													q.answered
														? "badge-success"
														: "badge-error"
												}`}
											>
												{q.answered
													? "Answered"
													: "Not answered yet"}
											</div>

											<p className="ml-3 text-sm">
												{" "}
												{moment(q?.createdAt).fromNow()}
											</p>
										</div>
										<p className="">{q.question}</p>
										<div className="answers">
											{q?.answers?.length > 0
												? q.answers.map((a: any) => {
														return (
															<div key={a.id} className="ans  m-1 flex">
																<IoReturnDownForwardSharp className="text-lg" />
																<div className="p-1  border border-base-content/10 rounded-sm ml-1 bg-success text-success-content w-full">
																	<div className="flex items-center justify-between">
																		<h3 className="font-bold underline">
																			{a?.user?.name}
																		</h3>
																		<p className="ml-3 text-sm">
																			{moment(a.createdAt).fromNow()}
																		</p>
																	</div>
																	<p>
																		{a?.answers}
																	</p>
																</div>
															</div>
														);
												  })
												: ""}
										</div>
									</div>
								);
						  })
						: ""}

					{/* <div className="review border border-base-content/10 mt-2 p-1 bg-base-200 rounded-sm	">
						<h2 className="font-bold underline">Ram thapa</h2>
						<div className="flex my-1 items-center justify-between">
							<div className="badge badge-error">
								not answered
							</div>

							<p className="ml-3 text-sm"> 1 month ago</p>
						</div>
						<p className="">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Dolores cumque distinctio quidem, in doloru?
							laborum?
						</p>
						<div className="answers"></div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default ProductQnaSection;
