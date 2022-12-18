import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import ProductDetail from "../../components/productPageComponent/ProductDetail";
import ProductReviewSection from "../../components/productPageComponent/ProductReviewSection";
import ProductDescription from "../../components/productPageComponent/ProductDescription";
import ProductQnaSection from "../../components/productPageComponent/ProductQnaSection";
import useAxios from "../../hooks/useAxios";
import { baseUrl } from "../../api/apiUrl";
import { getCookie } from "cookies-next";
import Error from "../../components/helper/Error";

const ProductById: NextPage = ({ data, error }: any) => {
	const [product, setproduct] = useState(data);
	console.log(product)
	const topRef: any = useRef(null);
	useEffect(() => {
		topRef.current.scrollIntoView({ behavior: "auto" });
	}, []);

	if (error !== "") {
		return <Error message={error} />;
	}
	return (

		<div className={""} ref={topRef}>
			<ProductDetail product={product} setproduct={setproduct} />
			<ProductDescription product={product} setproduct={setproduct} />
			<ProductReviewSection product={product} setproduct={setproduct} />
			<ProductQnaSection product={product} setproduct={setproduct}  />
		</div>
	);
};

export async function getServerSideProps({ query, req, res, params }: any) {
	const axios = useAxios(getCookie("Ptoken", { req, res }));
	console.log("Param", params);
	let data: any = {};
	let url = `${baseUrl}/product/${params.id}`;
	let error = "";
	console.log(url);
	try {
		const res = await axios.get(url);
		data = res?.data?.data || {};
		console.log("data : ",data)
	} catch (error: any) {
		error = error?.response?.data?.data || "Something went wrong !!!";
		console.log("Error : ",error)
	}
	return {
		props: {
			data,
			query,
			error,
		},
	};
}

export default ProductById;
