import express from 'express';
let app = express();

app.get('/', (_req, res)=>{
    res.sendFile('index.html', {root: __dirname});
})
app.listen(8080, ()=>{console.log("LISTENING ON PORT :8080")});