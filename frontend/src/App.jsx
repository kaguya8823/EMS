import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PrivateRouters from "./utils/PrivateRouters";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";
import AdminSummary from "./components/dashboard/AdminSummary";
import DepartmentList from "./components/department/DepartmentList";
import AddDepartment from "./components/department/AddDepartment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin-dashboard/*"
          element={
            <PrivateRouters>
              <RoleBaseRoutes requiredRole="admin">
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRouters>
          }
        >
          <Route index element={<AdminSummary />} />
          <Route path="departments" element={<DepartmentList />} />
          <Route path="add-department" element={<AddDepartment />} />
        </Route>

        <Route
          path="/employee-dashboard"
          element={
            <PrivateRouters>
              <RoleBaseRoutes requiredRole="employee">
                <EmployeeDashboard />
              </RoleBaseRoutes>
            </PrivateRouters>
          }
        />

        <Route path="/unauthorized" element={<div>Unauthorized</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;