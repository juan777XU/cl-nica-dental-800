//import express from "express"
//import { crud_usuarios} from "./controlador/crud_usuarios.js";
const express = require("express");

const mysql = require("mysql");
//const express=require();
const path = require("path");
//const { fileURLToPath } = require("url");
const app = express()

//cont__dirname=dirname(fileURLToPath(import.meta.url))
//console.log(__dirname);

//archivos staticos
app.use(express.static("public"));
app.use(express.static("./controlador"));

//app_e.get("/",crud_usuarios.leer);
//app_e.post("/crud_u",crud_usuarios.cud)


//app.set("views", path.join(_dirname,"./views"));


let conexion = mysql.createConnection({
    host: "localhost",
    database:"prueba_clinica",
    user: "root",
    password: ""

    
});

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
//app.use(express.static())

//que muestre el formulario
app.get("/", function(req,res){
    res.render("registro");
 }); 
  
   // app.get("/inicio", function(req,res){
      //res.render("inicio");
//});
//

//enlaces vistas
app.get("/", (req, res)=>res.render("index"))
app.get("/inicio", (req, res)=>res.render("inicio"))
app.get("/navegacion", (req, res)=>res.render("navegacion"))
app.get("/personas", (req, res)=>res.render("personas"))
//res.sendFile(path.join(__dirname + "/registro.ejs"));

//app.use(express.static(join(_dirname,"public")));
//
app.post("/validar", function(req,res){
    const datos = req.body;

let cedula = datos.ced;
let nombre = datos.nom;
let apellido = datos.apell;
let telefono = datos.num;
let correo = datos.correo;
let password = datos.pass;

// AQUI VA UNAS LINEAS

let registrar ="INSERT INTO usuarios_registrados (ced, nombre, apellido, telefono, correo, contrasenia)VALUES('"+cedula+"','"+nombre+"','"+apellido+"','"+telefono+"','"+correo+"','"+password+"')";
  conexion.query(registrar, function(error){
   if(error){
      throw error;
   }else{
        console.log("datos almacenados correctamente");
          }
        });
      
   });
 

    


app.listen(4200,function(){
console.log("servidor creado http://localhost:4200");
});