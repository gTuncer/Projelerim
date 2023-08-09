import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'

function Login() {

    const {user,setUser,getAllUsers} = useContext(GlobalContext)
    const [getUser, setGetUser] = useState({
        "username" : "",
        "password" : ""
    })
    const navigate = useNavigate()


    useEffect(() => {
        getAllUsers()
    },[])

    const handleLogin = (event) => {
        event.preventDefault()
        const isActive = user.find((element) => element.username==getUser.username )

        

        if(getUser.username==isActive?.username && getUser.password==isActive?.password){
            localStorage.setItem("read",isActive.read)
            localStorage.setItem("create",isActive.create)
            localStorage.setItem("update",isActive.update)
            localStorage.setItem("delete",isActive.delete)
            navigate("/")
        }
        else{
            alert("Hatalı kullanıcı adı veya şifre girdiniz.!!")
        }
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <div className='mb-2'>
                <label htmlFor='username'>Username</label>
                <input type='text' onChange={(e) => setGetUser({...getUser,username:e.target.value})} name='username' className='form-control' placeholder='Enter Username' required></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='password' onChange={(e) => setGetUser({...getUser,password:e.target.value})} name='password' className='form-control' placeholder='Enter Password' required></input>
            </div>
            <div className='mb-2'>
                <button className='btn btn-sm btn-success'>Login</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login