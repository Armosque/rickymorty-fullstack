import Sequelize from 'sequelize';


const {DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_PORT}= process.env;
const sequelize = new Sequelize(`postgres://postgres:1234@localhost:/db-rickymorty`,{logging:true})

export default sequelize;