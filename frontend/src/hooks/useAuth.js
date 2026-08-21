import { useContext, createContext } from 'react'

export const userContext = createContext()

export const useAuth = () => useContext(userContext)
