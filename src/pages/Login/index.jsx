import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import useUser from '../../hooks/UseUser'

export const Login = () => {

  const {user, login} = useUser()

  useEffect(() => {
    login()
  },[login]);

  return (
    <>
    <div>Login</div>
    <hr />
    <h2>Bienvenido, {user}</h2>
    <Link to={'/'}>Volver al Home</Link>
    </>
  )
}
