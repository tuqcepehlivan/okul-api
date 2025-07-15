
const express = require("express");
const app= express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API çalışıyor");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Sunucu ${PORT} portunda çalışıyor.');
});

const usersRouter = require("./routes/user");
app.use("/users", usersRouter);

const dersRouter = require("./routes/ders");
app.use("/dersler", dersRouter);

const devamsizlikRouter = require("./routes/devamsizlik");
app.use("/devamsizlik", devamsizlikRouter);

const sinifRouter = require("./routes/sinif");
app.use("/sinif", sinifRouter);

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);
