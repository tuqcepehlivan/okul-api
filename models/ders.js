'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "ogretmenId",
        as: "ogretmen",
      });

      Ders.belongsToMany(models.User, {
        through: "UserDers",
        foreignKey: "dersId",
        otherKey: "userId",
        as: "ogrenciler"
      });

      this.hasMany(models.Devamsizlik, { foreignKey: "dersId", as: "devamsizliklar" });
    }
  }
  Ders.init({
    ad: DataTypes.STRING,
    kodu: DataTypes.STRING,
    ogretmenId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ders',
  });
  return Ders;
};