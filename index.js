require('./config/conexion');
var wiki = require('./rutas.js');

const express = require('express');
const rutas = require('./rutas');
const port = (process.env.port || 3000);

const app = express();
app.use(express.json())
//configuracion del puerto 
app.set('port',port);

// rutas
app.use('/api', wiki); 
// inicira el servidor 

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log("error al iniciar el servidor: "+error)
    }else{
        console.log("servidor iniciado en el puerto: "+port)
    }
})
