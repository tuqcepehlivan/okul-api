
const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceContoller");


router.get("/", attendanceController.getAllAttendance);

router.post("/", attendanceController.createAttendance);

module.exports = router;