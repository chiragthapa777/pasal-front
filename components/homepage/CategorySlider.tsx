import React from "react";
import CategorySliderItem from "./CategorySliderItem";

type Props = {};

export default function CategorySlider({}: Props) {
	return (
		<div className="container my-6 mx-auto lg:w-5/6 flex items-center justify-center flex-col px-2 max-w-full">
			<div className="w-full flex flex-no-wrap overflow-x-auto lg:justify-center scrolling-touch ">
				<CategorySliderItem
					url="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					title="Men's Fashion"
				/>
				<CategorySliderItem
					url="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					title="Women's Fashion"
				/>
				<CategorySliderItem
					url="https://images.pexels.com/photos/4210314/pexels-photo-4210314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					title="Home & Lifestyle"
				/>
				<CategorySliderItem
					url="https://images.pexels.com/photos/4004122/pexels-photo-4004122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					title="Health & Beauty"
				/>
				<CategorySliderItem
					url="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					title="Groceries & Pets"
				/>
				<CategorySliderItem
					url="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					title="Electronic Devices"
				/>
			</div>
		</div>
	);
}
