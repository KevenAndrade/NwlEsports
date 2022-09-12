import express from "express";

const app = express()

app.get('/ads',(req, res)=>{
    return res.json([
        {id:1, anucio: "Anucio 1"},
        {id:2, anucio: "Anucio 2"},
        {id:3, anucio: "Anucio 3"},
        {id:4, anucio: "Anucio 4"},
    ])
})

app.listen(3333)