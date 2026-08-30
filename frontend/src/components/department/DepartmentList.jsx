
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { columns, defaultDepartmentSample } from '../../utils/DepartmentHelper'
import { useEffect, useState } from 'react'
import { DepartmentButtons } from '../../parts/DepartmentButton'
import axios from 'axios'

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [depLoading, setDepLoading] = useState(false)

  useEffect(() => {
    const fetchDepartments = async () => {
      setDepLoading(true)
      try {
        const response = await axios.get('http://localhost:3001/api/department', {
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
          }
        })

        if (response.data.success) {
          const serverDepartments = response.data.departments || []
          const mappedData = serverDepartments.length > 0
            ? serverDepartments.map((dep, index) => ({
                _id: dep._id,
                sno: index + 1,
                dep_name: dep.dep_name,
                action: (<DepartmentButtons />)
              }))
            : defaultDepartmentSample.map((row) => ({
                ...row,
                action: row.action
              }))

          setDepartments(mappedData)
        }
      } catch(error) {
        if(error.response && !error.response.data.success) {
          alert(error.response.data.error)
        }
        setDepartments(defaultDepartmentSample)
      } finally {
        setDepLoading(false)
      }
    };
    fetchDepartments();
  }, [])

  return (
    <>{depLoading ? <div>Loading...</div> :
    <div className='p-5'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Departments</h3>
      </div>
      <div className='flex justify-between items-center'>
        <input 
        tepe="text" 
        placeholder='Seach By Name'
        className='px=4 py-0.5 border'
         />
        <Link to="/admin-dashboard/add-department"
        className='px-4 py-1 bg-teal-600 rounded text-white'
        >
        Add New Department
        </Link>
      </div>
      <div>
        <DataTable
        columns={columns}
        data={departments}
        />
      </div>
    </div>
    }</>
  )
}

export default DepartmentList