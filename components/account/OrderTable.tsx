import React from "react";
import OrderItem from "./OrderItem";
import Loader from "../helper/Loader";

type Props = {
    orders: any;
    loading:boolean;
};

export default function OrderTable({orders, loading}: Props) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* <!-- head --> */}
                <thead>
                <tr>
                    <th>order</th>
                    <th>status</th>
                    <th>Paid</th>
                    <th>Total(RS)</th>
                    <th>discount(RS)</th>
                    <th>vat(RS)</th>
                    <th>grand total(RS)</th>
                    <th>Date(AD)</th>
                </tr>
                </thead>
                <tbody>
                {/* <!-- row 1 --> */}
                {loading ? <tr>
                    <td colSpan={8} className={`text-center`}><Loader/></td>
                </tr> : orders.length > 0
                    ? orders.map((order: any) => (
                        <OrderItem key={order.id} order={order}/>
                    ))
                    : <tr>
                        <td colSpan={8} className={`text-center`}>No orders found</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    );
}
