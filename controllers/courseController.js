
const { Course, User } = require("../models");

const getAllCourses = async (req, res) => {

    try {
        const courses = await Course.findAll();
        res.json(courses);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const [updated] = await Course.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated)
      return res.status(404).json({ error: "Course not found" });
    const updatedCourse = await Course.findByPk(req.params.id);
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.destroy({ where: { id: req.params.id } });
    if (!deleted)
      return res.status(404).json({ error: "Course not found" });
res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addStudentToCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.courseId);
    const user = await User.findByPk(req.params.userId);

    if (!course || !user) {
      return res
        .status(404)
        .json({ error: "Course or user not found" });
    }

    await course.addStudents(user);

    res.json({ message: "Student successfully added to course" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
  addStudentToCourse,
};
