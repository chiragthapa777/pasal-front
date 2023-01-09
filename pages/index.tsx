import type { NextPage } from "next";
import Corousel from "../components/homepage/Corousel";
import { wrapper } from "../store";
import ProductGroup from "../components/product/ProductGroup";
import { productList } from "../data";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { handleSwal } from "../store/slice/profile";
import { useSelector, useDispatch } from "react-redux";
import CategorySlider from "../components/homepage/CategorySlider";
import ImageGallery from "../components/homepage/ImageGallery";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxios from "../hooks/useAxios";
import { baseUrl } from "../api/apiUrl";
import Loader from "../components/helper/Loader";

const Index: NextPage = (props: any) => {
	const dispatch = useDispatch();
	const MySwal = withReactContent(Swal);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [products, setProducts] = useState([]);
	const fetchProducts = async () => {
		try {
      setLoading(true)
      const axios = useAxios()
      const data:any = axios.get(`${baseUrl}/product`)
      setProducts(data?.data?.data)
      setLoading(false)
		} catch (error: any) {
			console.log(error);
			setLoading(false);
			toast.error(
				error?.response?.data?.data ||
					error?.message ||
					"Could not fetch product",
				{
					theme:
						window.localStorage.getItem("lightMode") === "true"
							? "light"
							: "dark",
				}
			);
		}
	};
	useEffect(() => {
    fetchProducts()
  }, []);
	const openSwap = () => {
		MySwal.fire({
			title: <p>Hello World</p>,
			didOpen: () => {
				// `MySwal` is a subclass of `Swal` with all the same instance & static methods
				MySwal.showLoading();
			},
		}).then(() => {
			return MySwal.fire(<p>Shorthand works too</p>);
		});
		dispatch(handleSwal(MySwal));
	};
	return (
		<div className={""}>
			{/*<Hero />*/}
			<Corousel />
			<CategorySlider />
      {/* {
        loading ? <div>
          <Loader />
        </div> :
      } */}
			<ProductGroup header={"New Arrivals"} productList={productList} />
			<ProductGroup header={"Top seller"} productList={productList} />
			<ImageGallery />
			<ProductGroup
				header={"Dashain Special"}
				productList={productList}
			/>
		</div>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async (ctx) => {
		//   console.log(ctx)
		//   store.dispatch(setProfileData("namemafdsfasbdi"))
		// const {resolvedUrl}=ctx
		return {
			props: {},
		};
	}
);

export default Index;
