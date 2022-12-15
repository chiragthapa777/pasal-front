import React, {useContext, useEffect, useState} from "react";
import OrderDetail from "../../helper/OrderDetail";
import {toast} from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import {getCookie} from "cookies-next";
import {baseUrl} from "../../../api/apiUrl";
import OrderContext from "../../../contexts/OrderContext";
import {useFormik} from "formik";

export default function PaymentModal({order}: any) {
    const {setOrders, orders} = useContext(OrderContext);
    const [open, setopen] = useState(false)

    const [detail, setDetail] = useState<{ order: any, error: string, loading: boolean }>({
        order: order,
        loading: false,
        error: ''
    });

    interface initalFormikINterface {
        mode: string
        orderId: number
        amount: string
        note: string
    }

    useEffect(() => {
        if (open) {
            handleDetailFetch()
        }
    }, [open]);

    const handleDetailFetch = async () => {
        try {
            const axios = useAxios()
            setDetail({...detail, loading: true})
            const response: any = await axios.get(`${baseUrl}/order/${order.id}`)
            setDetail({order: response?.data?.data || {}, loading: false, error: ''})
        } catch (error: any) {
            setDetail({...detail, loading: false, error: error?.message})
        }
    }

    const formik = useFormik<initalFormikINterface>({
        initialValues: {
            mode: "",
            orderId: order?.id,
            amount: order?.grandTotal.toString() || '0',
            note: ''
        },
        onSubmit: (values, {setSubmitting}) => {
            handlePay(values, setSubmitting)
        },
        validate: (values) => {
            let errors: any = {};
            if (!values.mode) {
                errors.mode = "Required!";
            }
            if (!values.orderId) {
                errors.amountorderId = "Required!";
            }
            if (!values.amount) {
                errors.amount = "Required!";
            } else {
                if (isNaN(Number(values.amount))) {
                    errors.amount = "Invalid amount."
                }
                if (Number(values.amount) < 0) {
                    errors.amount = "Amount must be greater than zero."
                }
            }
            return errors;
        },
    });


    const handlePay = async (values: initalFormikINterface, setSubmitting: any) => {
        try {
            const axios = useAxios()
            const body = {...values, amount: Number(values.amount)}
            const res = await axios.post(`${baseUrl}/payment`, body)
            const data = res?.data?.data || {}
            setOrders(orders.map((order: any) => {
                if (order.id === values.orderId) {
                    return {...order, isPaid: data.isPaid}
                } else {
                    return order
                }
            }))
            toast.success(`Return Rs.${Math.abs(data.returnAmount)}`, {
                theme:
                    window.localStorage.getItem("lightMode") === "true"
                        ? "light"
                        : "dark",
            });
            setSubmitting(false)
            setopen(false)
        } catch (e: any) {
            setSubmitting(false)
            toast.error(e?.response?.data?.data || e?.message || "Could not update order", {
                theme:
                    window.localStorage.getItem("lightMode") === "true"
                        ? "light"
                        : "dark",
            });
        }
    }
    return (
        <>
            <label htmlFor="my-modal-5" className="btn btn-sm btn-success mx-1" onClick={() => {
                setopen(!open)
            }}>
                Pay
            </label>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" checked={open} disabled/>
            <div className="modal">
                <div className="modal-box relative text-left  w-11/12 max-w-7xl  overflow-y-hidden">
                    <label
                        htmlFor="my-modal-5"
                        className="btn btn-sm btn-circle absolute right-2 top-2 btn-error "
                        onClick={() => {
                            setopen(!open)
                        }}
                    >
                        ✕
                    </label>
                    <h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase ">
                        Add Payment
                    </h1>
                    <div className={'flex'}>

                        <div className={`w-full overflow-y-auto h-[500px]`}>
                            <OrderDetail order={detail.order} loading={detail.loading} error={detail.error}/>
                        </div>
                        <form action="" onSubmit={formik.handleSubmit} className={`min-w-[350px] ml-2`}>
                            <div className={`pb-3`}>
                                <div className="form-control w-full">
                                    <label className="label">
                                    <span className="label-text">
                                        Payment Method
                                    </span>
                                    </label>
                                    <select className="select select-bordered" id={`mode`}
                                            onChange={formik.handleChange} value={formik.values.mode}>
                                        <option disabled={true} value={``} selected>Select One</option>
                                        <option value={`CASH`}>CASH</option>
                                        <option value={'ESEWA'}>ESEWA</option>
                                        <option value={`FONEPAY`}>FONEPAY</option>
                                        <option value={`CHEQUE`}>CHEQUE</option>
                                        <option value={`CREDIT CARD`}>CREDIT CARD</option>
                                    </select>
                                    <label className="label">
                                        <span className="label-text-alt text-error">{formik.errors?.mode}</span>
                                    </label>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
							<span className="label-text">
								Amount
							</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Amount"
                                        className="input input-bordered w-full "
                                        id={`amount`}
                                        value={formik.values.amount}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="label">
                                        <span className="label-text-alt text-error">{formik.errors?.amount}</span>
                                    </label>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                    <span className="label-text">
                                        Order
                                    </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="order"
                                        className="input input-bordered w-full "
                                        id={`orderId`}
                                        value={formik.values.orderId}
                                        onChange={formik.handleChange}
                                        disabled={true}
                                    />
                                    <label className="label">
                                        <span className="label-text-alt text-error">{formik.errors?.orderId}</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Remark</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" value={formik.values.note}
                                              id={`note`}
                                              onChange={formik.handleChange}
                                              placeholder="Write remark for payment.."></textarea>
                                </div>
                            </div>
                            <button className={`btn btn-primary ${
                                formik.isSubmitting ? "loading" : ""
                            }`} type={`submit`}>Confirm
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}
