// const app=require("./app")

// //Setear el archivo de configuración
// const dotenv=require("dotenv");
// dotenv.config({path: 'back/config/config.env'})

// //Llamemos al server
// const server = app.listen(process.env.PORT, () => {
//     console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
// })


const app = require('./app');

//sertear el archivo de configuracion
const dotenv = require("dotenv");
dotenv.config({path: 'back/config/config.env'})


const PUERTO = process.env.PORT || 3000;
const MODO = process.env.NODE_ENV;

const server = app.listen(process.env.PORT, () => {
console.log(`El servidor esta escuchando en el puerto: ${PUERTO} en modo ${MODO}`)
})




