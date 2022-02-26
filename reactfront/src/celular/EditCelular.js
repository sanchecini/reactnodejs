import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/celulars/'

const CompEditCelular = () => {
    const [titulo, setTitulo] = useState('')    
    const [content, setContent] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (cel) => {
        cel.preventDefault()
        await axios.put(URI+id, {
            titulo: titulo,
            content: content
        })
        navigate('/celulars')
    }

    useEffect( ()=>{
        getCelularById()
    },[])

    const getCelularById = async () => {
        const res = await axios.get(URI+id)
        setTitulo(res.data.titulo)
        setContent(res.data.content)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    value={titulo}
                    onChange={ (cel)=> setTitulo(cel.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Content</label>
                <textarea
                    value={content}
                    onChange={ (cel)=> setContent(cel.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditCelular