import React from "react";

type Props = {
	value: any;
	type?: string;
	placeholder?: string;
	info?: string;
	id: string;
	error?: string;
	onChange: any;
    title ?:string
};

export default function Input(props: Props) {
	const { title,value, onChange, type, placeholder, error, id, info } = props;
	return (
		<div className="form-control w-full ">
			<label className="label">
				<span className="label-text">{title}</span>
			</label>
			<input
				id={id}
				value={value}
				onChange={onChange}
				type={type || "text"}
				placeholder={placeholder}
				className={`input input-bordered ${!error?"":"input-error"} input w-full`}
			/>
			<label className="label">
				<span className={`label-text-alt ${error!==""?"text-error":"text-info"}`}>{error || info}</span>
			</label>
		</div>
	);
}
