import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../../api/apiUrl";
import Loader from "../../components/helper/Loader";
import OrderDetail from "../../components/helper/OrderDetail";
import useAxios from "../../hooks/useAxios";

export default function orderDetail() {
	const router = useRouter();
	const { oid } = router.query;
	const [loading, setLoading] = useState(false);
	const [order, setOrder] = useState<any>({});
	const [error, setError] = useState("");
	const fetchOrder = async () => {
		try {
			setLoading(true);
			const axios = useAxios();
			const data = await axios.get(`${baseUrl}/order/${oid}`);
			console.log(data.data.data)
			setOrder(data.data.data);
			setLoading(false);
		} catch (err: any) {
			setLoading(false);
			toast.error(err?.response?.data?.data || "Cannot fetch order", {
				theme:
					window.localStorage.getItem("lightMode") === "true"
						? "light"
						: "dark",
			});
			setError(err?.response?.data?.data || "Cannot fetch order");
		}
	};
	useEffect(() => {
		if(oid){
			fetchOrder();
		}
	}, []);


	return (
		<div className="lg:max-w-[1200px] container mx-auto p-1 bg-base-100">
			{!loading && !order?.id ? (
				<div className="w-full h-full flex justify-center">
					<Loader />
				</div>
			) : (
				// null
				<OrderDetail order={order} loading={loading} error={error} />
			)}
		</div>
	);
}
