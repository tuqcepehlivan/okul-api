

const { where } = require("sequelize");
const { Classroom, User } = require("../models");

const getAllClassrooms = async (req, res) => {
    try {
        const classrooms = await Classroom.findAll({
            include: [{ model: User, as: "students" }],
        });
        res.json(classrooms);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.create(req.body);
        res.status(201).json(classroom);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getClassroomById = async (req, res) => {
    try {
        const classroom = await Classroom.findByPk(req.params.id, {
            include: [{ model: User, as: "students" }],
        });
        if (!classroom)
            return res.status(404).json({ error: "Classroom not found"});
        res.json(classroom);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateClassroom = async (req, res) => {
    try {
        const [updated] = await Classroom.update(req.body, {
            where: { id: req.params.id },
        });
        if (!updated)
            return res.status(404).json({ error: "Classroom not found"});
        const updatedClassroom = await Classroom.findByPk(req.params.id);
        res.json(updatedClassroom);
    }

    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteClassroom = async (req, res) => {
    try {
        const deleted = await Classroom.destroy({
            where: { id: req.params.id },
        });
        
        if(!deleted)
            return res.status(404).json({ error: "Classroom not found"});
        res.json({ message: "Classroom deleted"});
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllClassrooms,
    createClassroom,
    getClassroomById,
    updateClassroom,
    deleteClassroom,
};