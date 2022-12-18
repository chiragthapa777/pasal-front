import React, {useEffect, useState} from 'react'
import AdminNav from '../../../components/admin/AdminNav'
import TagAddModal from '../../../components/admin/tag/TagAddModal'
import TagTable from '../../../components/admin/tag/TagTable'
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import {baseUrl} from "../../../api/apiUrl";
import Error from "../../../components/helper/Error";
import AdminTagContext from "../../../contexts/AdminTagContext"
import TagEditModal from "../../../components/admin/tag/TagEditModal";

type Props = {}

export default function index({}: Props) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [tags, setTags] = useState([]);

	const fetchAllTags = async () => {
		try {
			const axios = useAxios()
			// useAuth({roles:["ADMIN"],redirectPath:"/login",setError})
			setLoading(true)
			const response = await axios.get(`${baseUrl}/tag`)
			const data = response?.data?.data || []
			setTags(data)
			setLoading(false)
			console.log("Tags response : ", response)

		} catch (e: any) {
			console.log(e)
			setLoading(false)
			setError(e?.message || "Cannot fetch tags")
		}
	}

	useEffect(() => {
		fetchAllTags()
		return () => {
			console.log("Tag page destroyed.")
		};
	}, []);

	if (error) {
		<Error message={error}/>
	}

	return (
    <AdminTagContext.Provider value={{loading, setLoading, setError, tags, setTags}}>
			<AdminNav basePath={"tags"} />
			<div className="lg:max-w-[1300px] container mx-auto rounded-md border bg-base-100 my-3 py-4 px-2">
				<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
					Tags List
				</h1>
				<div className="optionbar p-2 flex">
					<TagEditModal />
				</div>
				<TagTable />
			</div>
		</AdminTagContext.Provider>
  )
}
