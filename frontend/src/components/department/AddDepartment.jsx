import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
    const [department, setDepartment] = useState({
        dep_name: "",
        description: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDepartment({...department, [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3001/api/department/add', department, {
                headers: {
                    "Authorization": token ? `Bearer ${token}` : ""
                }
            })
            if (response.data.success) {
                navigate('/admin-dashboard/departments')
            }
        } catch (error) {
            const message = error.response?.data?.error || error.response?.data?.message || 'Failed to add department';
            alert(message)
        }
    }
  return (
    <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
        <div>
            <h2 className='text-2xl font-bold mb-6'>Add Department</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                     htmlFor='dep_name'
                     className='text-sm font-medium text-gray-700'
                     >
                        Department Name
                    </label>
                    <input
                    type='text'
                    name='dep_name'
                    value={department.dep_name}
                    onChange={handleChange}
                    placeholder='Department Name'
                    className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                    required
                    />
                </div>
                <div className='mt-3'>
                    <label 
                    htmlFor='description'
                    className='block text-sm font-medium text-gray-700'
                    >
                        Description
                    </label>
                    <textarea
                    name='description'
                    value={department.description}
                    placeholder='Description'
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    />
                </div>
                <button
                type='submit'
                className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'
                >
                    Add Department
                    </button>
            </form>
        </div>
    </div>
  )
}

export default AddDepartment