
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

const courseRouter = require("./routes/course");
app.use("/course", courseRouter);

const attendanceRouter = require("./routes/attendance");
app.use("/attendance", attendanceRouter);

const classroomRouter = require("./routes/classroom");
app.use("/classroom", classroomRouter);

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);
