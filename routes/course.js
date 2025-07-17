
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.get("/", courseController.getAllCourses);

router.post("/", courseController.createCourse);

router.get("/:id", courseController.getCourseById);

router.put("/:id", courseController.updateCourse);


router.delete("/:id", courseController.deleteCourse);


router.post("/:courseId/students/:userId", courseController.addStudentToCourse);
    

module.exports = router;