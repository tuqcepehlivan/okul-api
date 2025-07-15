
const express = require("express");
const router = express.Router();
const { Sinif, User } = require("../models");

router.get("/", async (req, res) => {
    try {
        const siniflar = await Sinif.findAll({
            include: [{ model: User, aas: "ogrenciler"}]
        });
        res.json(siniflar);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const sinif = await Sinif.create(req.body);
        res.status(201).json(sinif);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const sinif = await Sinif.findByPk(req.params.id, {
            include: [{ model: User, as: "ogrenciler"}]
        });
        if (!sinif) return res.status(404).json({ error: "Sınıf bulunamadı" });
        res.json(sinif);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req,res) => {
    try {
        const [updated] = await Sinif.update(req.body, {where: { id: req.params.id}});
        if (!updated) return res.status(404).json({error: "Sınıf bulunamadı"});
        const updatedSinif = await Sinif.findByPk(req.params.id);
        res.json(updatedSinif);
    } 
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Sinif.destroy({ where: { id: req.params.is}});
        if (!deleted) return res.status(404).json({ error: "Sınıf bulunamadı"});
        res.json({ message: "Sınıf silindi"});
    } catch (error) {
        res.status(500),json({ error: error.message });
    }
});

module.exports = router;