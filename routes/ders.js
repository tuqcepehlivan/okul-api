
const express = require("express");
const router = express.Router();
const { Ders } = require("../models");
const { User } = require("../models"); 

router.get("/", async (req, res) => {
    try {
        const dersler = await Ders.findAll();
        res.json(dersler);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const ders = await Ders.create(req.body);
        res.status(201).json(ders);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const ders = await Ders.findByPk(req.params.id);
        if (!ders) return res.status(404).json({ error: "Ders bulunamadı"});
        res.json(ders);
    }

    catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.put("/:id", async (req, res) => {
    try {
        const [updated] = await Ders.update(req.body, { where: { id: req.params.id }});
        if (!updated) return res.status(404).json({ error: "Ders bulunamadı"});
        const updatedDers = await Ders.findByPk(req.params.id);
        res.json(updatedDers);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Ders.destroy({ where: { id: req.params.id }});
        if (!deleted) return res.status(404).json({ error: "Ders bulunamadı"});

    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post("/:dersId/ogrenciler/:userId", async (req, res) => {
    try{
        const ders = await Ders.findByPk(req.params.dersId);
        const user = await User.findByPk(req.params.userId);

        if (!ders || !user) {
            return res.status(404).json({ error: "Ders veya kullanıcı bulunamadı"}); 
        }

        await ders.addOgrenciler(user);

        res.json({ message: "Öğrenci derse başarıyla eklendi" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;