import { useRouter } from "next/router";
import React from "react";
import { MdChevronRight } from "react-icons/md";

type Props = {
	vendor:any
};

export default function VendorCard({vendor}: Props) {
    const router = useRouter()
    const handleGo = () =>{
        router.push({
            pathname: "/product",
            query: {
                vendor:vendor.name,
            },
        });
    }
	return (
		<div className="VendorCard bg-base-100 p-2 rounded-lg">
			<div className="cardTop">
				<h1 className="text-lg font-bold mb-2">{vendor.name}</h1>
				<p className="text-xs">
					{vendor.desc}
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
