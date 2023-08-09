import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

function Read() {

const {id} = useParams()    

const {data,getAllDataById} = useContext(GlobalContext)

const navigate = useNavigate()

const viewYetki = localStorage.getItem("read")


useEffect (() => {
    if(viewYetki==="true"){
    getAllDataById(id)
    }
    else{
        alert("Görüntüleme yetkiniz bulunmamaktadır.")
        navigate("/")
    }
},[])


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3>Detail Of User</h3>
                <div className='mb-2'>
                    <strong>{data.name}</strong>
                </div>
                <div className='mb-2'>
                    <strong>{data.email}</strong>
                </div>
                <div className='mb-2'>
                    <strong>{data.phone}</strong>
                </div>
                <div className='mb-2'>
                    <Link to={`/Update/`+id} className='btn btn-sm btn-success me-2'>Update</Link>
                    <Link to={"/"} className='btn btn-sm btn-primary me-2'>Back</Link>
                </div>

            </div>

        </div>
  )
}

export default Read