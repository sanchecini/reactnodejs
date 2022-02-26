import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/users/'

const CompEditBlog = () => {
    const [username, setUsername] = useState('')
    const [passwd, setPasswd] = useState('')
    const [name, setName] = useState('')  
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, 
            {
            username: username, 
            passwd:passwd, 
            name:name})
        navigate('/users')
    }

    useEffect( ()=>{
        getUserById()
    },[])

    const getUserById = async () => {
        const res = await axios.get(URI+id)
        setUsername(res.data.username)
        setName(res.data.name)
        setPasswd(res.data.passwd)

    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Nombre usuario</label>
                <input
                    value={username}
                    onChange={ (e)=> setUsername(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre persona</label>
                <input
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Contra</label>
                <input
                    value={passwd}
                    onChange={ (e)=> setPasswd(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>        
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditBlog