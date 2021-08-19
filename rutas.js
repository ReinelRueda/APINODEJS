var express = require('express');
var router = express.Router();
const conexion = require('./config/conexion')

// rutas para consulta a la base de datos 

// ruta get para traer toda la lista de equipos
router.get('/',(req,res)=>{
    let sql="select * from tb_equipo"
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
// ruta get para traer un equipo en especifico

router.get('/:id',(req,res)=>{
    const {id}=req.params
    let sql="select * from tb_equipo where id_equipo = ?"
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

// ruta post para insertar un equipo nuevo

router.post('/',(req,res)=>{
    const{nombre,logo}=req.body
    let sql =`insert into tb_equipo(nombre,logo) values('${nombre}','${logo}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err)throw err
        else{
            res.json({status:'equipo agregado'})
        }
    })
})

// ruta delete para eliminar un equipo
router.delete('/:id',(req,res)=>{
    const {id}=req.params
    let sql=`delete from tb_equipo where id_equipo = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'equipo eliminado'})
        }
    })
})

// ruta put para actualizar un quipor por id
router.put('/:id',(req,res)=>{
    const {id}=req.params
    const {nombre,logo}=req.body
    let sql =`update tb_equipo set nombre ='${nombre}',logo ='${logo}' where id_equipo= '${id}' `
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'equipo modificado'})
        }
    })
})

module.exports = router;