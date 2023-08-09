import { createContext, useState } from "react";
import axios from "axios";


export const GlobalContext = createContext()



export const GlobalProvider = (props) => {

    const title= "List of Employee";
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    const [values, setValues] = useState ({
        "name" : "",
        "email" : "",
        "phone" : ""
    })
    const [degerler, setDegerler] = useState({
        "username" : "",
        "password" : "",
        "read" : false,
        "create" : false,
        "update" : false,
        "delete" : false
})

    const getAllUsers= () =>{
        axios.get("http://localhost:8000/users")
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))
    }
    const createKullanıcı = () =>{
        axios.post(`http://localhost:8000/users`,degerler)
        .then((res)=> {
            setDegerler(res.data)
        })
        .catch((err) => console.log(err))
    }
    const getAllData = () =>{
        axios.get("http://localhost:8000/employee")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }
    const getAllDataById = (id) =>{
        axios.get(`http://localhost:8000/employee/`+id)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }
    const getAllValueById = (id) =>{
        axios.get(`http://localhost:8000/employee/`+id)
        .then((res) => setValues(res.data))
        .catch((err) => console.log(err))
    }
    const getAllDegerlerById = (id) =>{
        axios.get(`http://localhost:8000/users/`+id)
        .then((res) => setDegerler(res.data))
        .catch((err) => console.log(err))
    }
    const getAllUserById = (id) =>{
        axios.get(`http://localhost:8000/users/`+id)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))
    }
    const createUser = () =>{
        axios.post(`http://localhost:8000/employee`,values)
        .then((res)=> {
            setValues(res.data)
        })
        .catch((err) => console.log(err))
    }
    const updateUser = (id) =>{
        axios.put(`http://localhost:8000/employee/`+id,values)
        .then((res)=> {
            setValues(res.data)
        })
        .catch((err) => console.log(err))
    }
    const updateDegerler = (id) =>{
        axios.put(`http://localhost:8000/users/`+id,degerler)
        .then((res)=> {
            setValues(res.data)
        })
        .catch((err) => console.log(err))
    }
    const deleteUser = (id) => {
        
        axios.delete(`http://localhost:8000/employee/`+id)
        .then((res) => {
            document.location.reload()
        })
        .catch((err) => console.log(err))
    
}
const deleteDegerler = (id) => {
        
    axios.delete(`http://localhost:8000/users/`+id)
    .then((res) => {
        document.location.reload()
    })
    .catch((err) => console.log(err))

}

    return <GlobalContext.Provider 
    value={{title,data,setData,values,setValues,user,setUser,degerler,deleteDegerler,setDegerler,updateDegerler,createKullanıcı, getAllUserById,getAllData,getAllDataById,getAllValueById,getAllDegerlerById,getAllUsers,createUser,updateUser,deleteUser}}>
    {props.children}
    </GlobalContext.Provider>
}