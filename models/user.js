'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      this.hasMany(models.Ders, {
        foreignKey: "ogretmenId",
        as: "dersler",
      });

      this.belongsTo(models.Sinif, {
        foreignKey: "sinifId",
        as: "sinif",
      });

      this.hasMany(models.Devamsizlik, { 
        foreignKey: "ogrenciId", 
        as: "devamsizliklar"
      });

      this.belongsToMany(models.Ders, {
        through: "UserDers",
        foreignKey: "userId",
        otherKey: "dersId",
        as: "aldigiDersler"
      });

    }
  } 
    
     
  User.init({
    ad: DataTypes.STRING,
    soyad: DataTypes.STRING,
    numara: DataTypes.INTEGER,
    role: DataTypes.ENUM("ogrenci", "ogretmen"),
    sinifId: DataTypes.INTEGER,
    sifre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};