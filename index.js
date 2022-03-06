var express = require('express');
var app =express();


app.use('/',(req,res)=>{
    res.send('<h1>ChatFlicker</h1>')
})


app.listen(1111, (err)=>{
    if(err){

        console.log('Error at server 1111')
    }
    else{
        console.log('Server at 1111')
    }
});
