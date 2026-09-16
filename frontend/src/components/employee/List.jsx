import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { EmployeeButtons, columns } from '../../utils/EmployeeHelper'
import DataTable from '@revivejs/react-data-table-component'

const List = () => {
    const [employees, setEmployees] = useState([]);
    const [empLoading, setEmpLoading] = useState(false);



      useEffect(() => {
        const fetchEmployees = async () => {
          setEmpLoading(true)
          try {
            const response = await axios.get('http://localhost:3001/api/employee', {
              headers: {
                Authorization : `Bearer ${localStorage.getItem('token')}`,
              },
            });
            console.log(response.data)
            if (response.data.success) {
              let sno = 1;
              console.log(response.data)
              const data = await response.data.employees.map((emp) => ({
                    _id: emp._id,
                    sno: sno++,
                    dep_name: emp.department.dep_name,
                    name: emp.userId.name,
                    dob: new Date(emp.dob).toLocaleDateString(),
                    profileImage: <
                      img src={`http://localhost:3001/${emp.userId.profileImage}`}
                      alt="Profile"
                      width="50"
                      height="50"
                      className="rounded-full"
                       />,
                    action: (<EmployeeButtons Id={emp._id} />),
                  }));
              setEmployees(data);
            }
          } catch(error) {
            if(error.response && !error.response.data.success) {
              alert(error.response.data.error)
            }
          } finally {
            setEmpLoading(false)
          }
        };
        fetchEmployees();
      }, [])


  return (
    <div className='p-6'>
        <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Employee</h3>
      </div>
      <div className='flex justify-between items-center'>
        <input 
        type="text" 
        placeholder='Search By Emp Name'
        className='px=4 py-0.5 border'
         />
        <Link to="/admin-dashboard/add-employee"
        className='px-4 py-1 bg-teal-600 rounded text-white'
        >
        Add New Employee
        </Link>
      </div>
      <div>
        <DataTable columns={columns} data={employees} />
      </div>
    </div>
  )
}

export default List