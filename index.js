const express = require('express');

const app = express();

app.get('/' , (req,res)=>{
    res.send({hi:'Hello There'});
});

app.listen(5000);