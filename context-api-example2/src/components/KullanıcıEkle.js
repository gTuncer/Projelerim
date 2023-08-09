import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

export default function KullanıcıEkle() {

const {degerler,setDegerler,createKullanıcı} = useContext(GlobalContext)

const navigate = useNavigate()

const handleCreateKullanıcı = (event) => {
    event.preventDefault()
    createKullanıcı()
    navigate("/Kullanıcılar")
}

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleCreateKullanıcı}>
            <div className='mb-2'>
                <label htmlFor='username'>Username</label>
                <input type='text' onChange={(e) => setDegerler({...degerler,username: e.target.value})} name='username' className='form-control' placeholder='Enter Username' required></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='text' onChange={(e) => setDegerler({...degerler,password: e.target.value})} name='password' className='form-control' placeholder='Enter Password' required></input>
            </div>
            <div className='form-check'>
                <label htmlFor='read'>Read</label>
                <input className="form-check-input" onChange={(e) => setDegerler({...degerler,read: e.target.checked})}  type='checkbox' name='read' ></input>
            </div>
            <div className='form-check'>
                <label htmlFor='create'>Create</label>
                <input type='checkbox' onChange={(e) => setDegerler({...degerler,create: e.target.checked})} name='create' className='form-check-input' ></input>
            </div>  
            <div className='form-check'>
                <label htmlFor='update'>Update</label>
                <input type='checkbox' onChange={(e) => setDegerler({...degerler,update: e.target.checked})} name='update' className='form-check-input' ></input>
            </div>  
            <div className='form-check'>
                <label htmlFor='delete'>Delete</label>
                <input type='checkbox'onChange={(e) => setDegerler({...degerler,delete: e.target.checked})} name='delete' className='form-check-input' ></input>
            </div>
            <button className="btn btn-success">Create</button>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>

    </div>


</div>
  )
}
