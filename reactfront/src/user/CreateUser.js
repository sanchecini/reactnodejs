import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/users/'

const CompCreateUser = () => {
    const [username, setUsername] = useState('')
    const [passwd, setPasswd] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {username: username, name:name, passwd:passwd})
        navigate('/users')
    }   

    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre de usuario</label>
                    <input
                        value={username}
                        onChange={ (e)=> setUsername(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div> 
                 <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Conrasna</label>
                     <input
                        value={passwd}
                        onChange={ (e)=> setPasswd(e.target.value)} 
                        type="text"
                        className='form-control'
                    />      
                 </div>  
                 <button type='submit' className='btn btn-primary'>Store</button>                  
           </form>
        </div>
    )
}

export default CompCreateUser