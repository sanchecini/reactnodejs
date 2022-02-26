//importamos el Modelo
import CelularModel from "../models/CelularModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllCelulars= async (req, res) => {
    try {
        const celulars= await CelularModel.findAll()
        res.json(celulars)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getCelular = async (req, res) => {
        try {
            const celular = await CelularModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(celular[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createCelular = async (req, res) => {
    try {
       await CelularModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateCelular = async (req, res) => {
    try {
        await CelularModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteCelular = async (req, res) => {
    try {
        await CelularModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}