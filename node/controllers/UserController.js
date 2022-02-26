//importamos el Modelo
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getUser = async (req, res) => {
        try {
            const user = await UserModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(user[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createUser = async(req, res) => {
    const { username, name, passwd } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(passwd, salt);
    try {
        await UserModel.create({
            username: username,
            name: name,
            passwd: hashPassword
        });
        res.json({
            "message":"¡Registro creado correctamente!"
        });
    } catch (error) {
        console.log(error);
    }
}

//Actualizar un registro
export const updateUser = async (req, res) => {
    try {
        await UserModel.update(req.body, {
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
export const deleteUser = async (req, res) => {
    try {
        await UserModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

