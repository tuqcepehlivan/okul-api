
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login =  async (req, res) => {
  try { 
    
        const { number, password } = req.body;

        const user = await User.findOne({ where: { number }});
        if (!user) return res.status(404).json({ error: "Kullanıcı bulunamadı" });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ error: "Şifre yanlış" });

        const token = jwt.sign({ id: user.id, role: user.role }, "gizliKey", {expiresIn: "1h"});

        res.json({ message: "login succesful", token });
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { login };