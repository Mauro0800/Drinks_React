import {createContext, useState} from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const login = () => {
        setUser("Eric")
    }

    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        login,
        logout
    }

  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {
    AuthProvider,
    AuthContext
}