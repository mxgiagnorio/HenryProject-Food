const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // ID me lo genera solo
  sequelize.define("diets", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
