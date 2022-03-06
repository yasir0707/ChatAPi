var express = require('express');
var app =express();
const port  = process.env.port || 3000;

app.use('/',(req,res)=>{
    res.send('<h1>ChatFlicker</h1>')
})


app.listen(port, (err)=>{
    if(err){

        console.log('Error at server 1111')
    }
    else{
        console.log('Server at ',port)
    }
});
