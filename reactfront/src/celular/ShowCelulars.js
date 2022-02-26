import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'



const URI = 'http://localhost:8000/celulars/'


const CompShowCelulars = () => {
    
    const [celulars, setCelular] = useState([])
    useEffect( ()=>{
        getCelulars()
    },[])

    //procedimineto para mostrar todos los Celulars
    const getCelulars = async () => {
        const res = await axios.get(URI)
        setCelular(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteCelular = async (id) => {
       await axios.delete(`${URI}${id}`)
       getCelulars()
    }

    return(
        
        <div className='container'>
            <div className='row'>
                <h2>
                    Aqui es CELULARES
                </h2>
                <div className='col'>
                    <Link to="/celulars/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { celulars.map ( (celular) => (
                                <tr key={ celular.id}>
                                    <td> { celular.titulo } </td>
                                    <td> { celular.content } </td>
                                    <td>
                                        <Link to={`/celulars/edit/${celular.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteCelular(celular.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowCelulars