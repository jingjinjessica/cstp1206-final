const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) =>{
    const imagess = await prisma.Image.findMany({});
    res.render("plantFinder.jade",{images: images, user: req.session.user});
});


router.get('/item', async (req, res) =>{
    const id = parseInt(req.query.id);
    const image = await prisma.Image.findFirst({where: {id: id}});
    image["title"] = "Image";
    res.render("item.jade",image);
});

router.get('/item/find', async (req, res) =>{
    const query = req.body.query || req.query.query;
    const images = await prisma.Image.findMany({where:{name: query}});
    res.render("plantFinder.jade",{images: images});
});

module.exports = router;
