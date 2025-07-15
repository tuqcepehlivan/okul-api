const { Ogrenci, sequelize } = require('./models');

async function addStudent() {
  try {
    await sequelize.authenticate(); // DB bağlantısını kontrol et
    console.log('Database connected.');

    const yeniOgrenci = await Ogrenci.create({
      ad: 'Tuğçe',
      soyad: 'Pehlivan',
      numara: 1217,
      sinif: '2',
      sinifId: null // eğer ilişkili sınıf varsa id'sini buraya yazabilirsin
    });

    console.log('Yeni öğrenci eklendi:', yeniOgrenci.toJSON());

    await sequelize.close();
  } catch (error) {
    console.error('Hata:', error);
  }
}

addStudent();
