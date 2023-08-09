import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

function Create() {

    const {values,setValues,createUser} = useContext(GlobalContext)

    const {id} = useParams()
    const navigate = useNavigate()
    const createYetki = localStorage.getItem("create")

    const handleCreate = (event) => {
        event.preventDefault()
        if(createYetki==="true"){
        createUser()
        navigate("/")
        }
        else{
            alert("Eklemek için yetkiniz bulunmamaktadır.")
        }
    }


  return (
    
    
   
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleCreate}>
            <div className='mb-2'>
                <label htmlFor='name'>Name</label>
                <input type='text' onChange={(e) => setValues({...values,name: e.target.value})} name='name' className='form-control' placeholder='Enter Name' required></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='text' onChange={(e) => setValues({...values,email: e.target.value})} name='email' className='form-control' placeholder='Enter Email' required></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='phone'>Phone</label>
                <input type='text'  onChange={(e) => setValues({...values,phone: e.target.value})} name='phone' className='form-control' data-mdb-input-mask="+48 999-999-999" placeholder='Enter Phone' required></input>
            </div>
            <button className="btn btn-success">Create</button>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>

    </div>


</div>

  )
}

export default Create