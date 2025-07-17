
const { Attendance, User, Course } = require("../models");

const getAllAttendance = async (req, res) => {
    try {
        const records = await Attendance.findAll({
            include: [
                { model: User, as: "student" },
                { model: Course },
            ],
        });
        res.json(records);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.create(req.body);
        res.status(201).json(attendance);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllAttendance,
    createAttendance,
};