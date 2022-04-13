const express = require('express');
const router = express.Router();
const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', (req, res) =>{
    res.render("login.jade");
});


router.post("/", async (req,res) =>{
    const name = req.body.name.trim();
    const password = req.body.password.trim();
    const user = await prisma.user.findFirst({where: {name: name}});
    if (!user){
        res.render("login.jade", {message:"user does not exist"});
    }
    else if (user.password !== password){
        res.render("login.jade", {message:"wrong password"});
    }
    else{
        req.session["user"] = user;
        res.redirect("/list");
    }
});


module.exports = router;