
const { User, Ders, sequelize } = require("../models");

async function run() {
    try {
        await sequelize.sync();

        const teacher = await User.create({
            ad: "buse",
            soyad: "pehlivan",
            numara: 10006,
            role: "ogretmen"
            
        });

        const ders = await Ders.create({
            ad: "fizik1",
            kodu: "FİZ101",
            ogretmenId: teacher.id
        });

        const result = await User.findByPk(teacher.id, {
            include: ["dersler"]
        });
        console.log("Öğretmen ve dersleri:", JSON.stringify(result, null, 2));

    }

    catch (error) {
        console.error("Hata:", error);
    }

    finally {
        await sequelize.close();
    }
}

run();