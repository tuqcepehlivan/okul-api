
const { User } = require("./models");

async function addUser() {

    try {
        const newUser = await User.create({
            ad: "tuğçe",
            soyad: "pehlivan",
            email:"tugce@gmail.com",
            role: "ogrenci",
            sinifId: 1
        });

        console.log("yeni kullanıcı eklendi:", newUser.toJSON());
    } 
    catch (error) {
        console.error("Hata:", error);
    }
    
}

addUser();