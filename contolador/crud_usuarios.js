//import express, { query } from "express"
import {conectar} from "../modelo/db_conectar.js"
var crud_usuarios=({})
crud_usuarios. leer = (req,res)=>{
    conectar.query("SELECT ced, nombre, apellido, telefono, correo, contrasenia",(error,results)=>{
        if(error){
            throw error;
        }else{
            res,render("/personas", {resultado:results})}
    })
};

crud_usuarios.cud= (req,res)=>{
    const btn_crear =req.body.btn_crear;
    const btn_actualizar =req.body.btn_actualizar;
    const btn_borrar =req.body.btn_borrar;
    const btn_ced =req.body.btn_ced;
    const btn_nom =req.body.btn_nom;
    const btn_apll =req.body.btn_apll;
    const btn_numer =req.body.btn_numer;
    const btn_correo =req.body.btn_correo;
    const btn_pass =req.body.btn_pass;

    if(btn_crear){
        conectar.query("insert into clientes set ?",{ ced:ced,nom:nom,apll:apll,numer:numer,correo:correo,pass:pass},(error,results)=>{
       if(error){
        console.log(error);
       }else{
            res.rediret("/");
       }
        });
    }
    if(btn_actualizar){

    }
    if(btn_borrar){

    }
};

export {crud_usuarios}