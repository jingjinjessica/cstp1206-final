const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) =>{
    const userId = req.session.user.id;
    const partyList = await prisma.PartyList.findMany({where: {user_id: userId}});
    res.render("list.jade", {partyList: partyList,user: req.session.user});
});


router.get('/item', async (req, res) =>{
    const id = parseInt(req.query.id);
    const image = await prisma.Image.findFirst({where: {id: id}});
    plant["title"] = "Image";
    res.render("item.jade",image);
});

router.get('/item/find', async (req, res) =>{
    const query = req.body.query || req.query.query;
    const images = await prisma.Image.findMany({where:{name: query}});
    res.render("list.jade",{images:images});
});

module.exports = router;