import AdminSidebar from '../components/dashboard/AdminSidebar';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/dashboard/Navbar';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
  <div className='flex'>
    <AdminSidebar />
    <div className='flex-1 ml-64 bg-gray-100 h-screen'>
      <Navbar />
    </div>
  </div>)
};

export default AdminDashboard;