'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ogrenci extends Model {
    
    static associate(models) {
      this.belongsTo(models.Sinif, { foreignKey: "sinifId", as: "sinif"});
      this.hasMany(models.Devamsizlik, { foreignKey: "ogrenciId", as: "devamsizliklar"});

      Ogrenci.belongsToMany(models.Ders, {
        through: "OgrenciDers",
        foreignKey: "ogrenciId",
        otherKey: "dersId",
        as: "dersler"
      })
    }
  }
  Ogrenci.init({
    ad: DataTypes.STRING,
    soyad: DataTypes.STRING,
    numara: DataTypes.INTEGER,
    sinifId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ogrenci',
  });
  return Ogrenci;
};