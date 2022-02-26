import {Sequelize} from 'sequelize'

const db = new Sequelize('ferrebosque', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db