import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const AdminDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  if(loading) {
    return (
      <div>Loading...</div>
    )
  }
  if (!user) {
    navigate('/login');
  }

  return ( <div>Admin Dashboard {user && user.name}</div>)
};

export default AdminDashboard;