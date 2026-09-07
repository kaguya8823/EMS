import { useNavigate } from "react-router-dom"

export const DepartmentButtons = ({Id}) => {
    const navigate = useNavigate()
    return (
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-teal-600 text-white"
            onClick={() => navigate(`/admin-dashboard/department/${Id}`)}>
                Edit
            </button>
            <button className="px-3 py-1 bg-red-600 text-white">
                Delete
            </button>
        </div>
    )
}