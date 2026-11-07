const express = require("express");
const route = express.Router;
router.get('/application',(req, res) => {res.send('application login route working');})

//post:send data
router.post('/',(req, res)=>{
    const name = "Brave";
    res.send(`Post API route working for ${name}`)
});
module.exports = router;