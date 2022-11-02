import React, { useState, useEffect } from "react";
import { MdArrowDropUp, MdArrowDropDown, MdClose } from "react-icons/md";
import Loader from "../Loader";

type Props = {};

export default function MultiSelect({
	setSelect,
	list,
	selects,
	loading,
	setlist,
}: any) {
	const [open, setopen] = useState(false);
	const [result, setresult] = useState(list);
	const [search, setsearch] = useState("");

	useEffect(() => {
		setresult(list);
	}, [loading]);

	const handleOpen = () => {
		setopen(!open);
	};
	const handleSerach = (e: any) => {
		setsearch(e.target.value);
    if(e.target.value!==""){
      setresult(result.filter((r:any)=>(r.name.toLowerCase()).includes(e.target.value.toLowerCase())))
    }else{
      setresult(list)
    }
	};
	const handleSelect = (tagId: number) => {
		const tag = list.find((t: any) => t.id === tagId);
		if (!tag?.select) {
			setSelect([...selects, tag]);
		}
		setlist(
			list.map((tag: any) => {
				if (tag.id === tagId) {
					return {
						...tag,
						select: true,
					};
				} else {
					return tag;
				}
			})
		);
		setresult(list);
	};
	const handleUnSelect = (tagId: any) => {
		setSelect(selects.filter((tag: any) => tag.id !== tagId));

		setlist(
			list.map((tag: any) => {
				if (tag.id === tagId) {
					return {
						...tag,
						select: false,
					};
				} else {
					return tag;
				}
			})
		);
		setresult(list);
	};
	return (
		<div className="MultiSelect relative">
			<div className="border border-base-content/25 cursor-pointer rounded-lg w-full flex justify-between">
				<div className="flex-1 m-3 flex flex-wrap gap-2 z-20" onClick={()=>{setopen(true)}}>
					{selects.length > 0
						? selects.map((sel: any) => (
								<div
									key={sel.id}
									className="badge badge-info gap-2 z-30"
								>
									<MdClose
										onClick={() => {
											handleUnSelect(sel.id);
										}}
									/>
									{sel.name}
								</div>
						  ))
						: "Categories"}
				</div>
				<div className="my-auto p-2" onClick={handleOpen}>
					{open ? (
						<MdArrowDropUp className="my-auto" />
					) : (
						<MdArrowDropDown className="my-auto " />
					)}
				</div>
			</div>
			<div className="w-full relative">
				<div
					className={`z-40 absolute p-2 top-2 rounded-sm border w-full bg-base-100 flex flex-col gap-1 max-h-56 overflow-auto ${
						open ? "block" : "hidden"
					}`}
				>
					<input
						type="text"
						className="input input-sm w-full border border-base-200 my-1"
						value={search}
						onChange={(e) => {
							handleSerach(e);
						}}
						placeholder="search..."
					/>
					{loading ? (
						<Loader />
					) : result.length > 0 ? (
						result.map((tag: any) => (
							<div
								key={tag.id}
								className={` ${
									tag?.select ? "bg-base-200/70 " : ""
								}hover:bg-base-200 rounded-md p-1 cursor-pointer`}
								onClick={() => {
									handleSelect(tag.id);
								}}
							>
								{tag.name}
							</div>
						))
					) : (
						"No categories"
					)}
				</div>
			</div>
		</div>
	);
}
