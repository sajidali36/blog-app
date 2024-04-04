import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { logout } = useAuth();


  return (
    <div className="mt-4 w-50 mx-auto">HomePage
      <button className="btn btn-sm btn-danger ms-5 mt-5" onClick={logout}>Logout</button>
    </div>
  )
}

export default HomePage
