import { useState, useEffect } from 'react'
import axios from 'axios'
import { userContext } from '../hooks/useAuth'

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem("token")

                if (!token) {
                    setUser(null)
                    setLoading(false)
                    return
                }

                const response = await axios.get(`http://localhost:3001/api/auth/verify`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                if (response.data.success) {
                    setUser(response.data.user)
                } else {
                    setUser(null)
                }
            } catch (error) {
                console.log(error)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        verifyUser()
    }, [])

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
    }

    return (
        <userContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </userContext.Provider>
    )
}

export default AuthContext

