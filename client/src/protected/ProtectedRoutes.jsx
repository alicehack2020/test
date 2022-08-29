import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoutes = (props) => {
    const {auth}=useContext(AuthContext)
    const {Components}=props

    let navigate=useNavigate()

    useEffect(()=>{
        if(auth==false)
        {
            navigate("/login")
        }
    })
  return (
    <Components/>
  )
}

export default ProtectedRoutes