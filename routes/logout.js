const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    req.session.user = undefined;
    res.render("login.jade");
});

module.exports = router;