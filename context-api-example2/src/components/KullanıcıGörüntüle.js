import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link, useNavigate, useParams } from 'react-router-dom'

function KullanıcıGörüntüle() {

    const {user,getAllUserById,} = useContext(GlobalContext)

    const {id} = useParams()

    useEffect(() => {
        getAllUserById(id)
    },[id])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3>Detail Of User</h3>
                <div className='mb-2'>
                    <tr key={user.id}><strong>Username</strong></tr><td>{user.username}</td>
                </div>
                <div className='mb-2'>
                <tr key={user.id} ><strong>Paswword</strong></tr><td>{user.password}</td>

                </div>
                <div className='mb-2'>
                <tr key={user.id}><strong>Görüntüleme Yetkisi</strong></tr><td>{user.read?.toString()}</td>

                </div>
                <div className='mb-2'>
                <tr key={user.id}><strong>Ekleme Yetkisi</strong></tr><td>{user.create?.toString()}</td>

                </div>
                <div className='mb-2'>
                <tr key={user.id}><strong>Güncelleme Yetkisi</strong></tr><td>{user.update?.toString()}</td>

                </div>
                <div className='mb-2'>
                <tr key={user.id}><strong>Silme Yetkisi</strong></tr><td>{user.delete?.toString()}</td>

                </div>
                <div className='mb-2'>
                    <Link to={`/KullanıcıGüncelle/`+id} className='btn btn-sm btn-success me-2'>Update</Link>
                    <Link to={"/Kullanıcılar"} className='btn btn-sm btn-primary me-2'>Back</Link>
                </div>

            </div>

        </div>
  )
}

export default KullanıcıGörüntüle