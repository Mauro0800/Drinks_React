import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { loginAuthService, profileUserService, toggleFavoriteService } from '../services/auth.service';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState(null)
    const [userProfile, setUserProfile] = useState(null)
    const [favorites, setFavorites] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem("DrinksToken")
        if(token){
            const decodedToken = jwtDecode(token);
            setUser(decodedToken.user)
            setFavorites(decodedToken.user.favorites)
        }
    }, [])
    

    const handleToggleFavorite = (idDrink) => {
        if(!favorites.includes(idDrink)){
            setFavorites([
                ...favorites,
                idDrink
            ])
        } else {
            setFavorites(favorites.filter(favorite => favorite !== idDrink))
        }

        toggleFavoriteService(idDrink)
    }

    const handleAlert = (error) => {
        setAlert(error.message)
        setTimeout(() => {
            setAlert(null)
        }, 3000)
    }

    const login = async (info) => {
        try {
            const response = await loginAuthService(info)
            const { token } = response

            sessionStorage.setItem("DrinksToken", token)

            const decodedToken = token ? jwtDecode(token) : null;
            setUser(decodedToken.user)
            setFavorites(decodedToken.user.favorites)
            navigate("/")
        } catch (error) {
            handleAlert(error)
        }
    }

    const getProfile = async () => {
        try {
            const token = sessionStorage.getItem("DrinksToken")

            if(!token) return null;

            const response = await profileUserService(token)
            // console.log(response);
            setUserProfile(response.user)
        } catch (error) {
            handleAlert(error)
        }
    }

    const logout = () => {
        setUser(null)
        setUserProfile({})
        setFavorites([])
        sessionStorage.removeItem("DrinksToken")
    }

    const contextValue = {
        login,
        logout,
        getProfile,
        handleToggleFavorite,
        user,
        favorites,
        userProfile,
        alert
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export {
    AuthProvider,
    AuthContext
}