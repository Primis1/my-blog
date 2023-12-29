import express from 'express'
let app = express()

app.get('/', (_req, res)=>{
    res.sendfile(__dirname +'index.html')
})
app.listen(80)