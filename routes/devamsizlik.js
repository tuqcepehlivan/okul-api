
const express = require("express");
const router = express.Router();
const { Devamsizlik, User, Ders } = require("../models");
const { where } = require("sequelize");

router.get("/", async (req, res) => {
    try {
        const devamsizliklar = await Devamsizlik.findAll({
            include: [
                { model: User, as: "ogrenci"},
                { model: Ders, as: "ders"}
            ]
        });
        res.json(devamsizliklar);
    }

    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/ogrenci/:ogrenciId", async (req, res) => {
    try {
      const devamsizliklar = await Devamsizlik.findAll({
        where: { ogrenciId: req.params.ogrenciId },
        include: [{ model: Ders, as: "ders"}]
      });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const devamsizlik = await Devamsizlik.create(req.body);
        res.status(201).json(devamsizlik);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const [updated] = await Devamsizlik.update(req.body, { where: { id: req.params.id}});
        if (!updated) return res.status(404).json({ error: "Devamsızlık kaydı bulunamadı"});
        const updatedRecord = await Devamsizlik.findByPk(req.params.id);
        res.json(updatedRecord);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Devamsizlik.destroy({where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: "Devamsızlık kaydı bulunamadı"});
        res.json({ message: "Devamsızlık kaydı silindi"});
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;