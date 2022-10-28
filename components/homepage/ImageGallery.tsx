import React from "react";

type Props = {};

export default function ImageGallery({}: Props) {
	return (
		<div className="container my-6 mx-auto lg:w-5/6 flex items-center justify-center max-w-full hidden lg:block">
			<div className="grid-cols-3 p-2 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3 ">
				<div className="w-full rounded">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_960_720.jpg"
						alt="image"
                        className="h-full w-full object-cover"
					/>
				</div>
				<div className="w-full col-span-2 row-span-2 rounded">
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Consumer_Electronics/XCM_CUTTLE_1367142_1891401_US_379x304_1X_en_US._SY304_CB640113800_.jpg"
                        className="h-full w-full object-cover"
						alt="image"
					/>
				</div>
				<div className="w-full rounded">
					<img
						src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="image"
                        className="h-full w-full object-cover"
					/>
				</div>
				<div className="w-full rounded">
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/CategoryCards/SP_W1_DT_Category_Image_Card_379x304_1X._SY304_CB608503839_.jpg"
						alt="image"
                        className="h-full w-full object-cover"
					/>
				</div>
				<div className="w-full rounded">
					<img
						src="https://m.media-amazon.com/images/G/01/sports/okennel/sobe2/XCM_CUTTLE_1474594_2607745_500x500_en_US_3._CB608294611_.jpg"
						alt="image"
                        className="h-full w-full object-cover"
					/>
				</div>
				<div className="w-full rounded">
					<img
						src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
						alt="image"
                        className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
