var express = require("express");
var router = express.Router();
const { Humano, HumanoHijo } = require("../models");
/* GET home page. */
router.get("/padre/:nombre", function(req, res, next) {
  Humano.findAll({
    where: {
      name: req.params.nombre
    }
  }).then(padres => res.json(padres));
});

router.get("/hijos/:nombre", function(req, res, next) {
  //recibo el nombre del padre por parametro de la ruta
  Humano.findAll({
    where: {
      name: req.params.nombre //busco al padre por su nombre(el cual saco de los params de la ruta: req.params.name)
    }
  }).then(padres =>
    padres[0]
      .getHijo() //una vez que tengo al padre busco a todos sus hijos
      // con el metodo de instancia que me regala sequelize cuando hago la relacion
      .then(hijos => res.json(hijos))
  ); //encuentra los hijos del padre y los manda al cliente con un res.json
});

module.exports = router;
