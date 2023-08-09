import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link, useNavigate, useParams } from 'react-router-dom'

function KullanıcıGüncelle() {

    const {degerler,setDegerler,updateDegerler,getAllDegerlerById} = useContext(GlobalContext)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getAllDegerlerById(id)
      },[id])

    const handleUpdate = (event) => {
        event.preventDefault()
        updateDegerler(id)
        navigate("/Kullanıcılar")
      } 

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update a User</h1>
        <form onSubmit={handleUpdate}> 
            <div className='mb-2'>
                <label htmlFor='username'>Username</label>
                <input type='text' onChange={(e) => setDegerler({...degerler,username:e.target.value})} value={degerler.username} name='username' className='form-control' placeholder='Enter Username' required></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='text' onChange={(e) => setDegerler({...degerler,password:e.target.value})} value={degerler.password} name='password' className='form-control' placeholder='Enter Password' required></input>
            </div>
            <div className='form-check'>
                <label htmlFor='read'>Read</label>
                <input className="form-check-input" onChange={(e) => setDegerler({...degerler,read:e.target.checked})} checked={degerler.read} type='checkbox' name='read' ></input>
            </div>
            <div className='form-check'>
                <label htmlFor='create'>Create</label>
                <input type='checkbox' name='create' onChange={(e) => setDegerler({...degerler,create:e.target.checked})} checked={degerler.create} className='form-check-input' ></input>
            </div>  
            <div className='form-check'>
                <label htmlFor='update'>Update</label>
                <input type='checkbox' name='update' onChange={(e) => setDegerler({...degerler,update:e.target.checked})} checked={degerler.update} className='form-check-input' ></input>
            </div>  
            <div className='form-check'>
                <label htmlFor='delete'>Delete</label>
                <input type='checkbox' name='delete' onChange={(e) => setDegerler({...degerler,delete:e.target.checked})} checked={degerler.delete} className='form-check-input' ></input>
            </div>
            <button className="btn btn-success">Update</button>
            <Link to="/Kullanıcılar" className='btn btn-primary ms-3'>Back</Link>
        </form>

    </div>


</div>
  )
}

export default KullanıcıGüncelle