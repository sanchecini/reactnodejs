import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/celulars/'

const CompCreateCelular = () => {
    const [titulo, setTitulo] = useState('')
    const [content, setContent] = useState('')
    const [file, setFile] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (cel) => {
        cel.preventDefault()
        await axios.post(URI, {titulo: titulo, content:content})
        navigate('/celulars')
    }   

    return (
        <div>
           <h3>Create POST de celulares</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <input
                        value={titulo}
                        onChange={ (cel)=> setTitulo(cel.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Contenido</label>
                    <textarea
                        value={content}
                        onChange={ (cel)=> setContent(cel.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <div className='mb-3'>
                    <label className='form-label'>Imagen</label>
                    <input
                        
                        type="file"
                        className='form-control'
                    />
                 </div>   
                 <button type='submit' className='btn btn-primary'>Store</button>                  
           </form>
        </div>
    )
}

export default CompCreateCelular