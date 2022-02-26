//importamos la conexión a la DB
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

 const UsersModel = db.define('users', {
     username: { type: DataTypes.STRING },
     passwd: { type: DataTypes.STRING },
     name: { type: DataTypes.STRING },
 })

 export default UsersModel