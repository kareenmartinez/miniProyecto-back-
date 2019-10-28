const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Humano extends Model {}
Humano.init(
  {
    name: DataTypes.STRING
  },
  { sequelize, modelName: "humano" }
);

class HumanoHijo extends Model {}
HumanoHijo.init(
  {
    name: DataTypes.STRING
  },
  { sequelize, modelName: "humanohijo" }
);

Humano.hasMany(HumanoHijo, { as: "hijo", foreignKey: "padreId" }); //a que id apuntar
HumanoHijo.belongsTo(Humano, { as: "padre" });

module.exports = { Humano, HumanoHijo };
