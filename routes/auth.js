
const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
    const { numara, sifre } = req.body;

    try {
        const user = await User.findOne({ where: { numara}});
        if (!user) return res.status(404).json({ error: "Kullanıcı bulunamadı" });

        const valid = await bcrypt.compare(sifre, user.sifre);
        if (!valid) return res.status(401).json({ error: "Şifre yanlış" });

        const token = jwt.sign({ id: user.id, role: user.role }, "gizliKey", {expiresIn: "1h"});

        res.json({ token });
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;