import Link from "next/link";
import React, {useEffect} from "react";
import {HiLocationMarker} from "react-icons/hi";
import {MdHomeFilled, MdCheckCircle} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import Loader from "../../components/helper/Loader";
import {updateShippingAddress} from "../../store/slice/authSlice";
import {useRouter} from "next/router";

type Props = {};


function FormControl(props: any) {
    const {title, value, onChange, type, placeholder, error, id, info} = props;
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text uppercase">{title}</span>
            </label>
            <input
                id={id}
                value={value}
                onChange={onChange}
                type={type || "text"}
                placeholder={placeholder}
                className={`input input-bordered ${!error ? "" : "input-error"} input-sm input-wide w-full`}
            />
            <label className="label">
                <span className={`label-text-alt ${error !== "" ? "text-error" : "text-info"}`}>{error || info}</span>
            </label>

        </div>
    )
}


export default function shipping({}: Props) {
    const {shipping, loading} = useSelector((state: any) => state.auth)
    const dispatch = useDispatch();
    const router = useRouter()

    const handleShippingContinue = async (values: any) => {
        const updateObject : any = {}
        const objectToCompare:any = {
            country: shipping?.country,
            province: shipping?.province || "",
            district: shipping?.district || "",
            ward: shipping?.ward || '',
            street: shipping?.street || "",
            phone: shipping?.phone || "",
        }
        for (const key in objectToCompare) {
            console.log(objectToCompare[key],values[key])
            if (objectToCompare[key] !== values[key]) {
                updateObject[key] = values[key]
            }
        }
        if (updateObject) {
            console.log("Update shipping address.")
            // @ts-ignore
            dispatch(updateShippingAddress(updateObject))
        }

        formik.setSubmitting(false)
        router.push('payment')


    }

    const initialValues = {
        country: shipping?.country,
        province: shipping?.province || "",
        district: shipping?.district || "",
        ward: shipping?.ward || '',
        street: shipping?.street || "",
        phone: shipping?.phone || "",
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            handleShippingContinue(values);
        },
        validate: (values) => {
            let errors: any = {};
            if (!values.country) {
                errors.country = "Required!";
            }
            if (!values.province) {
                errors.province = "Required!";
            }
            if (!values.district) {
                errors.district = "Required!";
            }
            if (!values.ward) {
                errors.ward = "Required!";
            }
            if (!values.street) {
                errors.street = "Required!";
            }
            if (!values.phone) {
                errors.phone = "Required!";
            }
            return errors;
        },
    });
    useEffect(() => {
        ;formik.setValues({...initialValues})
    }, [shipping, loading]);
    if (loading || !shipping) {
        return (
            <div className="w-full h-full flex justify-center items-center ">
                <Loader/>
            </div>
        )
    }


    return (
        <div className={"accountCss lg:max-w-[1200px] container mx-auto p-1"}>
            {/* upper navigation */}
            <div className="text-sm breadcrumbs text-info">
                <ul className="lg:max-w-[1200px] container">
                    <li className="cursor-pointer hover:underline">
                        <MdHomeFilled className="mr-1 my-auto"/>
                        <Link href="/" className="my-auto">
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline">
                        <MdCheckCircle className="mr-1 my-auto"/>
                        <Link href="/checkout" className="my-auto">
                            Checkout
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline">
                        <HiLocationMarker className="mr-1 my-auto"/>
                        <Link href="/checkout/shipping" className="my-auto">
                            Shipping
                        </Link>
                    </li>
                </ul>
            </div>
            {/* steps */}
            <div className="flex justify-center items-center w-full  flex-col">
                <ul className="steps my-4">
                    <li className="step step-info" data-content="✓">
                        Login
                    </li>
                    <li className="step step-info text-info" data-content="">
                        Shipping Address
                    </li>
                    <li className="step " data-content="">
                        Payment
                    </li>
                    <li className="step " data-content="">
                        Confirmation
                    </li>
                </ul>

                <form className="w-full md:w-[70%] bg-base-100 drop-shadow-sm px-2 py-4 rounded-md" onSubmit={formik.handleSubmit}>
                    <h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
                        shipping address
                    </h1>
                    <FormControl
                        value={formik.values.country}
                        id="country"
                        placeholder="Country"
                        error={formik?.errors.country}
                        onChange={formik.handleChange}
                        type="text"
                        info=""
                        title="Country"/>
                    <FormControl
                        value={formik.values.province}
                        id="province"
                        placeholder="Province"
                        error={formik?.errors.province}
                        onChange={formik.handleChange}
                        type="text"
                        info=""
                        title="Province"/>
                    <FormControl
                        value={formik.values.district}
                        id="district"
                        placeholder="District"
                        error={formik?.errors.district}
                        onChange={formik.handleChange}
                        type="text"
                        info=""
                        title="District"/>
                    <FormControl
                        value={formik.values.ward}
                        id="ward"
                        placeholder="Ward number"
                        error={formik?.errors.ward}
                        onChange={formik.handleChange}
                        type="text"
                        info=""
                        title="Ward number"/>
                    <FormControl
                        value={formik.values.street}
                        id="street"
                        placeholder="Street"
                        error={formik?.errors.street}
                        onChange={formik.handleChange}
                        type="text"
                        info=""
                        title="Street"/>
                    <div className="flex justify-end">
                        <button className="btn btn-sm mt-3 btn-error" disabled>
                            <Link href={"/checkout/login"}>
                                Back
                            </Link>

                        </button>
                        <button className={`btn btn-sm mt-3 btn-info ml-2 ${formik.isSubmitting?'loading':''}`} type={`submit`} >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
