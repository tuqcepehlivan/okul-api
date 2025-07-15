'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Devamsizlik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "ogrenciId", as: "ogrenci"});
      this.belongsTo(models.Ders, { foreignKey: "dersId", as: "ders" });
    }
  }
  Devamsizlik.init({
    ogrenciId: DataTypes.INTEGER,
    dersId: DataTypes.INTEGER,
    tarih: DataTypes.DATE,
    durum: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Devamsizlik',
  });
  return Devamsizlik;
};