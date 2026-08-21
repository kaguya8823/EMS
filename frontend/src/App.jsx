import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PrivateRouters from "./utils/PrivateRouters";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={
          <PrivateRouters>
            <RoleBaseRoutes requiredRole={"admin"}>
              <AdminDashboard />
            </RoleBaseRoutes>
          </PrivateRouters>
          }></Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;