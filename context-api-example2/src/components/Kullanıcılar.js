import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

function Kullanıcılar() {

    const { getAllUsers, user,deleteDegerler } = useContext(GlobalContext)

    useEffect(() => {
        getAllUsers()
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("Silmek istediğinize eminmisiniz ?")
        if(confirm){
        deleteDegerler(id)
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List of Users</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                    <Link to={'/'} className='btn btn-sm btn-success me-2'>HomePage</Link>
                    <Link to={'/KullanıcıEkle'} className='btn btn-sm btn-success'>Add +</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Read</th>
                            <th>Create</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.values(user).map((element, i) => (

                                <tr key={i}>
                                    <td>{element.username}</td>
                                    <td>{element.password}</td>
                                    <td><input type='checkbox' readOnly checked={element.read}></input></td>
                                    <td><input type='checkbox' readOnly checked={element.create}></input></td>
                                    <td><input type='checkbox' readOnly checked={element.update}></input></td>
                                    <td><input type='checkbox' readOnly checked={element.delete}></input></td>
                                    <td>
                                        <Link to={`/KullanıcıGörüntüle/` + element.id} className='btn btn-sm btn-primary me-2'>View</Link>
                                        <Link to={`/KullanıcıGüncelle/` + element.id} className='btn btn-sm btn-success me-2'>Update</Link>
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

export default Kullanıcılar