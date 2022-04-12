const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) =>{
    const id = parseInt(req.query["id"]);
    const plant = await prisma.Plant.findFirst({where:{id:id}});
    res.render("party.jade", plant);
});


router.post('/', async function(req,res){
    const id = parseInt(req.body.id);
    if (req.body.action === "post"){
        await prisma.Plant.update({data:{
                name: req.body.name,
                toone: req.body.toone
            },
            where:{
                id: id
            }
        });

        res.redirect("/list");
        return;
    }
    else if(req.body.action === "delete"){
        await prisma.Plant.delete({where:{id:id}});
        res.redirect("/list");
        return;
    }

    res.redirect("/");

});

module.exports = router;