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

router.get('/', async (req, res) =>{
    const id = parseInt(req.query["id"]);
    const party = await prisma.PartyList.findFirst({where:{id:id}});
    const guests = party.guests.split(",")
    const receiver = party.receiver.split(",")
    res.render("party.jade", {
        partyName: party.name,
        guests: guests,
        receiver: receiver,
        guestCount: guests.length,
        partyId: party.id
    });
});


module.exports = router;