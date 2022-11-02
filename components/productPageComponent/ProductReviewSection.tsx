import moment from "moment";
import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import ReactStars from "react-stars";
import product from "../../pages/vendor/product";

function ProductReviewSection(props: any) {
	const [open, setopen] = useState(false);
	const { product } = props;
	return (
		<div className="container mx-auto lg:w-5/6 border border-base-content/10 my-2">
			<div className="collapse">
				<input
					checked={open}
					type="checkbox"
					className="peer "
					onClick={() => {
						setopen(!open);
					}}
				/>
				<div className="collapse-title border border-primary text-primary font-bold p-1 sm:p-4 text-md sm:text-lg lg:text-xl  flex justify-between items-center">
					<p className="flex gap-2">
						Review & Rating({product?.reviews?.length||0}){" "}
						{open ? (
							<MdExpandLess className="my-auto text-2xl" />
						) : (
							<MdExpandMore className="my-auto text-2xl" />
						)}
					</p>
					<p></p>
					<button className="btn btn-sm btn-primary z-30">
						Add Review
					</button>
				</div>
				<div className="collapse-content">
					{product?.reviews?.length > 0
						? product.reviews.map((review: any) => (
								<div key={review.id} className="cursor-pointer review border border-base-content/10 mt-4  p-1 bg-base-200 rounded-sm">
									<h2 className="font-bold underline">
										{review?.user?.name}
									</h2>
									<div className="flex justify-start items-center">
										<ReactStars
											count={review?.rating}
											value={2.5}
											half={true}
											edit={false}
											size={18}
										/>
										<p className="ml-3 text-sm">
											{" "}
											{moment(review.createdAt).fromNow()}
										</p>
									</div>
									<p className="">
										{review?.feedback}
									</p>
								</div>
						  ))
						: <p className="m-2">This product has no reviews</p>	}
				</div>
			</div>
		</div>
	);
}

export default ProductReviewSection;
