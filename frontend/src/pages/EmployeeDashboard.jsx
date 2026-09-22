import { useAuth } from '../hooks/useAuth';
import Sidebar from '../components/EmployeeDashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import { Outlet } from 'react-router-dom';

const EmployeeDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in first.</div>;
  }

  return (
  <div className='flex'>
    <Sidebar />
    <div className='flex-1 ml-64 bg-gray-100 h-screen'>
      <Navbar />
      <Outlet />
    </div>
  </div>
  );
};

export default EmployeeDashboard