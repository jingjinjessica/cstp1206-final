const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render("create.jade");
});


router.post('/', async function(req,res){
    await prisma.Image.create({data:{
        name: req.body.name,
        image: req.body.imageData,
        toone: req.body.toone,
        user_id: req.session.user.id

    }});

    res.redirect("/list");
});

module.exports = router;