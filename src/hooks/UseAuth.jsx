import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

export default function UseAuth(){
  return (
    useContext(AuthContext)
  );
}
