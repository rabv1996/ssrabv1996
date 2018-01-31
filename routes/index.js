//0801-1996-09887

//Ricardo Baca 0801-1996-90887
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ricardo Antonio Baca Vallecillo' });
});
router.get('/data', function(req, res, next){
  res.render('index',{title: 'Data URL'});
});

router.get('/porsi',function(req, res, next){
  res.render('index',{title: 'Te Quiero Mi Amor'});
});

router.get('/tarea',function(req, res, next){
  res.render('curriculum',{title: 'Curriculum Vitae',
                            Nombre: 'Datos Personales',
                            Educacion:'Educacion',
                            Trabajo:'Historial Laboral',
                            Lengua:'Lengua',
                            Intereses:'Intereses',
                            Presentacion:'Presentacion'});
});

//aqui crearemps las dos rutas
//son dos ya que a diferencia de php o otros
// lenguajes de server side scripting
//en node.js debemos diferencia como se
//manejara para cada tipo de metodo http
//El comun solo para consulta es el metodo GET

router.get('/formulario', function(req, res, next){
  //este codigo manejara el metodo GET
  //datos es lo que javascript se conoce como objeto javascript
  //o en sus siglas un JSON.
  //{} este es un json vacio totalmente valido
  //
  var datos= {
    "txtNombre":"",
    "Mchecked":"checked=checked",
    "Fchecked":"",
    "resultado":""
  };
  //plantilla de la carpeta view
  //Y datos son los valores que seran
  //incorporados en los {{}} en la plantilla
  res.render('formulario', datos);
});
router.post('/formulario', function(req, res, next){
  console.log(req.body);
var datos={
  "txtNombre":"",
  "Mchecked":"checked = checked",
  "Fchecked":"",
  "resultado":"Esto es por metodo post"
};
  res.render('formulario', datos);
});
module.exports = router;
