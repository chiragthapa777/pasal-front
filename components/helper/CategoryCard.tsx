import { useRouter } from 'next/router';
import React from 'react'
import { MdChevronRight } from 'react-icons/md';

type Props = {}

export default function CategoryCard({}: Props) {
    const router = useRouter()
    const handleGo = () =>{
        router.push({
            pathname: "/product",
            query: {
                tag:"Men's Fashain",
            },
        });
    }
	return (
		<div className=" bg-base-100 p-2 rounded-lg">
			<div className="cardTop">
				<h1 className="text-lg font-bold mb-2">Men's Fashain</h1>
				<p className="text-xs">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Facere dolores blanditiis sint inventore ad non.
				</p>
			</div>
			<div className="cardBottom mt-2 w-full text-right">
				<button className="btn btn-sm btn-info btn-outline  " onClick={handleGo}>
					Go <MdChevronRight className="text-lg" />
				</button>
			</div>
		</div>
	);
}