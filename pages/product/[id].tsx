import type { NextPage } from "next";
import { useEffect,  useState } from "react";
import ProductDetail from "../../components/productPageComponent/ProductDetail";
import ProductReviewSection from "../../components/productPageComponent/ProductReviewSection";
import ProductDescription from "../../components/productPageComponent/ProductDescription";
import ProductQnaSection from "../../components/productPageComponent/ProductQnaSection";
import useAxios from "../../hooks/useAxios";
import { baseUrl } from "../../api/apiUrl";
import { getCookie } from "cookies-next";
import Error from "../../components/helper/Error";
import Head from 'next/head'
import useAuth from "../../hooks/useAuth";
import {useSelector} from "react-redux";

const ProductById: NextPage = ({ data, error }: any) => {
	const [product, setproduct] = useState(data);
	const {auth} = useSelector((state:any )=> state)
	useEffect(() => {
	}, []);
	useAuth({roles:[], redirectPath:'/login',setError:undefined})

	if (error !== "") {
		return <Error message={error} />;
	}
	return (

		<div className={""} >
			<Head>
				<title>Pasal - {product.name}</title>
				<meta name={`description`} content={product.desc}/>
				<meta name={`keywords`} content={`${product.name} ${product.productTags.map((p:any)=>`,${p.tag?.name} `)}`}/>
				<meta name={`vendor`} content={product.vendor.name}/>
				<meta property={`og:title`} content={product.name}/>
				{
					typeof window !== "undefined" ? <meta property={`og:url`} content={window.location.href}/> : null
				}

			</Head>
			<ProductDetail product={product} setproduct={setproduct} auth={auth} />
			<ProductDescription product={product} setproduct={setproduct} />
			<ProductReviewSection product={product} setproduct={setproduct} />
			<ProductQnaSection product={product} setproduct={setproduct}  />
		</div>
	);
};

export async function getServerSideProps({ query, req, res, params }: any) {
	const axios = useAxios(getCookie("Ptoken", { req, res }));
	let data: any = {};
	let url = `${baseUrl}/product/${params.id}`;
	let error = "";
	try {
		const res = await axios.get(url);
		data = res?.data?.data || {};
	} catch (error: any) {
		error = error?.response?.data?.data || "Something went wrong !!!";
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
