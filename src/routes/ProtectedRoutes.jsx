import { Navigate, Outlet } from 'react-router-dom';
import UseAuth from '../hooks/UseAuth'

export const ProtectedRoutes = () => {
  
    const {user} = UseAuth();

  return user ? <Outlet/> : <Navigate to={"/login"} replace/>
}
