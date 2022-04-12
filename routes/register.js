const express = require('express');
const router = express.Router();
const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', (req, res) =>{
    res.render("register.jade");
});


router.post("/", async (req,res) =>{
    console.info("hello")
    const name= req.body.name.trim();
    const password = req.body.password.trim();
    const user = await prisma.user.findFirst({where: {name: name}});
    if (user){
        res.render("register.jade", {message:"user exists, please choose another user name"});
    }
    else {
        const newUser = await prisma.user.create({data:{
            name: name,
            password: password
        }});
        res.redirect("/login");
    }

});


module.exports = router;