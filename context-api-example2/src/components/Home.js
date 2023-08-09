import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Home() {

    const { title, data, getAllData,deleteUser } = useContext(GlobalContext)

    useEffect(() => {
        getAllData()
    }, [])

    const navigate = useNavigate()

    const readYetki = localStorage.getItem("read")
    const createYetki = localStorage.getItem("create")
    const updateYetki = localStorage.getItem("update")
    const deleteYetki = localStorage.getItem("delete")


    const handleDelete = (id) => {
        if(deleteYetki==="true"){
        const confirm = window.confirm("Silmek istediğinize eminmisiniz ?")
        if(confirm){
        deleteUser(id)
        }
    }
    else{
        alert("Silmek için yetkiniz bulunmamaktadır.")
    }   
    }

    const handleKullanıcılar = (event) => {
        if(readYetki==="true" && createYetki==="true" && updateYetki==="true" && deleteYetki==="true"){
            navigate(`/Kullanıcılar`)
        }
        else{
            alert("Kullanıcıları Görüntüleme Yetkiniz Bulunmamaktadır. ")
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>{title}</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                <button onClick={handleKullanıcılar} className='btn btn-sm btn-success me-2' >Kullanıcılar</button>
                   <Link to={"/Create"} className='btn btn-sm btn-success me-2'>Add +</Link>
                   <Link to={"/Logout"} className='btn btn-sm btn-danger me-2'>Logout</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.values(data).map((element, i) => (
                                <tr key={i}>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.phone}</td>
                                    <td>
                                        <Link to={`/Read/`+element.id} className='btn btn-sm btn-primary me-2'>View</Link>
                                        <Link to={`/Update/`+element.id} className='btn btn-sm btn-success me-2'>Update</Link>
                                        <button onClick={(e) => handleDelete(element.id)} className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home