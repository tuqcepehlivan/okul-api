
const { Sinif } = require("./models");

async function addClass() {
    try {
        const yeniSinif = await Sinif.create({
            ad: "10/A",
            sube: "A",
        });
        console.log("Yeni sınıf eklendi:", yeniSinif.toJSON());
    } 
    catch (error) {
        console.error("Hata:", error);
    }
    
}

addClass();