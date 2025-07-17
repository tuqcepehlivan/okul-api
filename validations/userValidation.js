
const { body } = require("express-validator");


const userValidationRules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("surname").notEmpty().withMessage("Surname is required"),
    body("number").isNumeric().withMessage("Number must be numeric"),
    body("role")
       .isIn(["student", "teacher"])
       .withMessage("Role must be either student or teacher"),
    body("classId")
       .optional()
       .isInt()
       .withMessage("classId must be an integer"),
];


module.exports = {
    userValidationRules,
};