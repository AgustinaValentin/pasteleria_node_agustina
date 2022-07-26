var express = require('express');
var router = express.Router();
var nodemailer= require ('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto',{
    isContacto:true
  });
});

router.post('/', async function(req, res, next){
 console.log(req.body)

 var nombre=req.body.nombre;
 var email=req.body.email;
 var telefono=req.body.telefono;
 var intereses=req.body.intereses;
 var encuesta=req.body.encuesta;
 var comentarios=req.body.comentarios;

 var obj= {
  to:'valentinagustina3@gmail.com',
  subjetc:'contacto desde la pagina web',
  html: nombre +"se contacto a traves de la web y quiere saber mas info a este correo:"+ email + ".<br> su tel es:"
  +telefono + ".le interesa:" + intereses + ".nos conocio a traves de:" + encuesta + ".su comentario es:"+ comentarios + "."
 }
 var transport= nodemailer.createTransport({
  host:process.env.SMTP_HOST,
  port:process.env.SMTP_PORT,
  auth:{
    user:process.env.SMTP_USER,
    pass:process.env.SMTP_PASS
  }
 })
 var info= await transport.sendMail(obj);

 res.render('contacto',{
  message:'Mensaje enviado correctamente',
  isContacto:true
 })
})

module.exports = router;