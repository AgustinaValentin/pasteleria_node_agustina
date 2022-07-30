var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades',{
    layout:'admin/layout',
    persona:req.session.nombre,
    novedades
  }) 
});

router.get ('/agregar', (req, res, next)=> {
  res.render ('admin/agregar',{
    layout:'admin/layout'
  })
})

router.post('/agregar', async (req, res, next) => {
  //console.log(req.body)
  try{
    if(req.body.nombre != "" && req.body.precio != "" && req.body.cuerpo != ""){
      await novedadesModel.insertNovedades(req.body)
      res.redirect ('/admin/novedades')
    } else{
      res.render('admin/agregar',{
        layout:'admin/layout',
        error:true,
        message:'completar todos los campos'
      })
    }

  }catch(error){
    console.log(error)
    res.render ('admin/agregar',{
      layout:'admin/layout',
      error:true,
      message:'No se pudo cargar las novedades'
    })
  }
})

router.get('/eliminar/:id', async(req, res, next)=>{
  //console.log(req.params.id)
  var id = req.params.id;
  await novedadesModel.deleteNovedadByID(id);
  res.redirect('/admin/novedades');
})

module.exports = router;