import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { Profile } from '../pages/Profile'
import { Register } from '../pages/register'
import { ProtectedRoutes } from './ProtectedRoutes'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user' element={<ProtectedRoutes />}>
                <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}
