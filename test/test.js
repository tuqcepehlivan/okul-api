
const { User, Ders, Devamsizlik, sequelize } = require("../models");
const ogrenci = require("../models/ogrenci");

async function main() {
    try {
         
      await sequelize.sync();

      await Devamsizlik.create({
         ogrenciId: 1,
         dersId: 1,
         tarih: new Date(),
         durum: false
    });

     const kayitlar = await Devamsizlik.findAll({
        include: [
            { model: User, as: "ogrenci" },
            { model: Ders, as: "ders" }
        ],
    });
    console.log(JSON.stringify(kayitlar, null, 2));
} 
    catch (error) {
        console.error("Hata oluştu: ", error);
    }

    finally {
        await sequelize.close();
    }

}

main();