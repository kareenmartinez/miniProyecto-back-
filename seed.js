const { Humano, HumanoHijo } = require("./models");

// Humano.create({
//   name: "juan"
// }).then(h => {
//   HumanoHijo.create({ name: "juanjr" })
//     .then(humanito => humanito.setPadre(h))
//     .then(console.log);
// });

Humano.create({
  name: "erik"
})
  //creo un padre
  .then(Padre => {
    HumanoHijo.bulkCreate([
      { name: "erikjr" },
      { name: "karenjr" },
      { name: "santijr" }
    ])
      //creo muchos nenes huerfanos
      .then(humanitos => Padre.setHijo(humanitos))
      //el padre adopta los nenes huerfanitos
      .then(eri => eri.getHijo())
      //traigo a todos los nenes
      .then(console.log);
  });
