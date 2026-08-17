
import { useAuth } from '../hooks/useAuth';

const EmployeeDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in first.</div>;
  }

  return <div>EmployeeDashboard {user.name}</div>;
};

export default EmployeeDashboard