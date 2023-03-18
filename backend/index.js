import dotenv from 'dotenv/config';
import app from './app.js';
import sequelize from './src/db.js'

 sequelize.sync({force: true})
    .then(()=>{
app.listen(3001,()=>{
    console.log('running on port 3001')
})

    })


        
