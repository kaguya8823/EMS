
import { useAuth } from '../hooks/useAuth'
import { Navigate } from "react-router-dom"

const RoleBaseRoutes = ({ children, requiredRole }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    const allowedRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole]

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />
    }

    return children
}

export default RoleBaseRoutes