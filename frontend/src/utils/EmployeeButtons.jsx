import { useNavigate } from "react-router-dom"


    export const EmployeeButtons = ({ Id }) => {
        const navigate = useNavigate()
    
        return (
            <div className="flex space-x-3">
                <button 
                 className="px-3 py-1 bg-teal-600 text-white"
                 onClick={() => navigate(`/admin-dashboard/employees/${Id}`)}
                >
                    View
                </button>
                <button
                 className="px-3 py-1 bg-blue-600 text-white"
                 onClick={() => navigate(`/admin-dashboard/employees/edit/${Id}`)}
                >
                    Edit
                </button>
                <button className="px-3 py-1 bg-yellow-600 text-white">
                    Salary
                </button>
                <button className="px-3 py-1 bg-red-600 text-white">
                    Leave
                </button>
            </div>
        )
    };