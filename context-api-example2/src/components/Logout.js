import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.clear()
        navigate("/Login")
        
    },[])
  return (
    <div>Logout</div>
  )
}

export default Logout