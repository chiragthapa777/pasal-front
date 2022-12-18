import React, {useState, useContext} from 'react'
import {useFormik} from "formik";
import AdminTagContext from "../../../contexts/AdminTagContext";
import useAxios from "../../../hooks/useAxios";
import {baseUrl} from "../../../api/apiUrl";
import {toast} from "react-toastify";


export default function TagEditModal({tag, type}: any) {
    const [open, setOpen] = useState(false);
    const {setTags, tags} = useContext(AdminTagContext)
    const formik = useFormik({
        initialValues: {
            name: tag?.name || '',
            desc: tag?.desc || ''
        },
        onSubmit: (values) => {
			if(type === "edit"){
              handleUpdateTag(values)
			}else{
				handleAddTag(values)
			}
        },
        validate: (values) => {
            let errors = {
                name: "",
                desc: '',
            }
            if (!values.name) {
                errors.name = "Required!"
            }
        }
    })

	const handleAddTag = async (values: any) => {
		try {
			const axios = useAxios()
			const response = await axios.post(`${baseUrl}/tag`, values)
			const data = response?.data?.data || {}
			if (data?.id) {
				setTags([...tags, data])
			}
			toast.success(`Tag added successfully.`, {
				theme:
					window.localStorage.getItem("lightMode") === "true"
						? "light"
						: "dark",
			});
			formik.setSubmitting(false)
			setOpen(false)
		} catch (e: any) {
			formik.setSubmitting(false)
			toast.error(`${e.response.data.data}`, {
				theme:
					window.localStorage.getItem("lightMode") === "true"
						? "light"
						: "dark",
			});
		}

	}

    const handleUpdateTag = async (values: any) => {
        try {
            if (tag.name === values.name && tag.desc === values.name) {
                throw "No changes found."
            }
            const axios = useAxios()
            const response = await axios.put(`${baseUrl}/tag/${tag.id}`, values)
            const data = response?.data?.data || {}
            if (data?.id) {
                setTags(tags.map((t: any) => {
                    if (t.id == data.id) {
                        return data
                    } else {
                        return t
                    }
                }))
            }
            toast.success(`Tag updated successfully.`, {
                theme:
                    window.localStorage.getItem("lightMode") === "true"
                        ? "light"
                        : "dark",
            });
            formik.setSubmitting(false)
			setOpen(false)
        } catch (e: any) {
            formik.setSubmitting(false)
            toast.error(`${e.response.data.data}`, {
                theme:
                    window.localStorage.getItem("lightMode") === "true"
                        ? "light"
                        : "dark",
            });
        }

    }

    // @ts-ignore
    return (
        <>
            <label htmlFor={type === "edit"?"Model-EDIT":"Modal-ADD"} className="btn btn-sm btn-info mx-1" onClick={() => {
                setOpen(!open)
            }}>
				{type === "edit"?"EDIT":"ADD"}
            </label>

            <input type="checkbox" id={type === "edit"?"Model-EDIT":"Modal-ADD"} className="modal-toggle" checked={open} disabled={true}/>
            <div className="modal">
                <div className="modal-box relative text-left  ">
                    <label
                        htmlFor={type === "edit"?"Model-EDIT":"Modal-ADD"}
                        className="btn btn-sm btn-circle absolute right-2 top-2 btn-error "
						onClick={() => {
							setOpen(!open)
						}}
                    >
                        ✕
                    </label>
                    <h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase ">
						{type === "edit"?"EDIT TAG":"ADD TAG"}
                    </h1>
                    <div className="mb-3">
                        <div className="form-control w-full ">
                            <label className="label">
							<span className="label-text">
								Name
							</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full "
                                id={'name'}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <label className="label">
                                {/*// @ts-ignore*/}
                                <span className="label-text-alt">{formik.errors?.name}</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
							<span className="label-text">
								Description
							</span>
                            </label>
                            <textarea
                                id={'desc'}
                                onChange={formik.handleChange}
                                value={formik.values.desc}
                                placeholder="Type here"
                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>
                    <button className={`btn btn-primary ${formik.isSubmitting && 'loading'}`}
                            onClick={() => formik.handleSubmit()}>{type === "edit"?"EDIT":"ADD"}
                    </button>
                </div>
            </div>
        </>
    )
}
