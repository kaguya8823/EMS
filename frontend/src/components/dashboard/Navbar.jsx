
import { useAuth } from '../../hooks/useAuth'

const Navbar = () => {
    const {user} = useAuth
  return (
    <div className='flex justify-between h-12 bg-teal-600'>
        <p>Welcome {user.name}</p>
        <button>Logout</button>
    </div>
  )
}

export default Navbar