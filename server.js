const express = require('express');
const app = express();
const url=require('url');
const fs = require("fs");
fs.writeFile('log.txt','Hii EveryOne!',(err,data)=>{
    if(err){
        console.error(err);
    }
    console.log('Log file Created')
})

app.get('/' , (req, res)=>{
    const text = `${req.url} : ${new Date().getDate().toLocaleString()}\n`;
    fs.appendFile('log.txt',text , (err, data)=>{
        if(err){
            console.error(err);
        }
        res.send('Log File Updated')
    })
})
fs.readFile("log.txt" , "utf-8" , (err , data) =>{
 if(err){
  console.log("Error" , err);
 }else{
  console.log(data)
 }
})

app.listen(5050,()=>console.log(`Server is run at localhost :${5050}`))

 