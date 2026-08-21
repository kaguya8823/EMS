
import { useAuth } from '../hooks/useAuth'
import { Navigate } from "react-router-dom"

const PrivateRouters = ({children}) => {

    const {user, loading} = useAuth()

    if(loading) {
      return  <div>Loading...</div>
    }

    return user ? children : <Navigate to="/ligin" />
}

export default PrivateRouters