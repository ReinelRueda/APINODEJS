const mysql = require ('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_basico'

})

conexion.connect((err)=>{
    if(err){
        console.log("ha ocurrido un error: " + err)

    }
    else {
        console.log("conectado a la base de datos ")
    }
})
module.exports = conexion;