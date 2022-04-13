const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();
function randomArrayShuffle(array) {
    var index = array.length, tempValue, randomIndex;
    while (0 !== index) {
        randomIndex = Math.floor(Math.random() * index);
        index -= 1;
        tempValue = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
}

router.get('/', (req, res) =>{
    res.render("create.jade");
});


router.post('/', async function(req,res){
    const guests = req.body.guests.split(",");
    randomArrayShuffle(guests);

    await prisma.PartyList.create({data:{
        name: req.body.name,
        guests: req.body.guests,
        image: req.body.image,
        user_id: req.session.user.id,
        receiver: guests.join()
    }});

    res.redirect("/list");
});

module.exports = router;