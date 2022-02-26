//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const CelularModel = db.define('celulares', {
     titulo: { type: DataTypes.STRING },
     content: { type: DataTypes.STRING },
     
 })

 export default CelularModel