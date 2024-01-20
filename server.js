const express= require("express");
const res = require("express/lib/response");
const app= express();

const addTwoNumbers= (n1,n2) => {
    return n1 + n2;
}

const multiplyTwoNumbers= (n1,n2) => {
    return n1 * n2;
}

// GET function to add two provided numbers
app.get("/addTwoNumbers", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumbers(n1, n2);
    res.json({statuscode:200, data: result }); 
});

// GET function to multiply two provided numbers
app.get("/multiplyTwoNumbers", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = multiplyTwoNumbers(n1, n2);
    res.json({statuscode:200, data: result }); 
});

const port = 3040;

app.listen(port,()=> {
    console.log("I'm listening to port " + port);
})