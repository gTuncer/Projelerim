import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

function Update() {

  const {values,setValues,updateUser,getAllValueById} = useContext(GlobalContext)
  const {id} = useParams()
  const navigate = useNavigate()
  const updateYetki = localStorage.getItem("update")

  useEffect(() => {
    getAllValueById(id)
  },[id])

  const handleUpdate = (event) => {
    event.preventDefault()
    if(updateYetki==="true"){
    updateUser(id)
    navigate("/")
  }else{
    alert("Güncelleme yapma yetkiniz bulunmamaktadır.!!")
  }
  } 

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update a User</h1>
        <form onSubmit={handleUpdate}>
            <div className='mb-2'>
                <label htmlFor='name'>Name</label>
                <input type='text' onChange={(e) => setValues({...values,name:e.target.value})} value={values.name} name='name' className='form-control' placeholder='Enter Name'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='text' onChange={(e) => setValues({...values,email:e.target.value})} value={values.email} name='email' className='form-control' placeholder='Enter Email'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='phone'>Phone</label>
                <input type='text' onChange={(e) => setValues({...values,phone:e.target.value})} value={values.phone} name='phone' className='form-control' placeholder='Enter Phone'></input>
            </div>
            <button className="btn btn-success">Update</button>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>

    </div>
    </div>

  )
}

export default Update