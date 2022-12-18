import React, {useContext} from 'react'
import TagItem from './TagItem'
import AdminTagContext from "../../../contexts/AdminTagContext"
import Loader from "../../helper/Loader";

type Props = {}

export default function TagTable({}: Props) {

    const {tags, loading} = useContext(AdminTagContext);

    return (
        <div className="overflow-x-auto ">
            <table className=" w-full border-collapse ">
                <thead>
                <tr className="">
                    <th className="border-b py-3 px-2 bg-base-200 text-left">SN</th>
                    <th className="border-b py-3 px-2 bg-base-200 text-left">Name</th>
                    <th className="border-b py-3 px-2 bg-base-200">
                        Description
                    </th>
                    <th className="border-b py-3 px-2 bg-base-200 text-left">Date</th>
                    <th className="border-b py-3 px-2 bg-base-200 text-left">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    loading ? (
                        <tr>
                            <td rowSpan={5} className={`text-center`}>
                                <Loader/>
                            </td>
                        </tr>
                    ) : tags.length > 0 ? tags.map((tag: any, index: number) => <TagItem index={index} key={tag.id} tag={tag}/>) :
                        <tr>
                            <td rowSpan={5} className={`text-center`}>
                                Opps! there is no any tags.
                            </td>
                        </tr>
                }
                </tbody>
            </table>
        </div>
    )


}
