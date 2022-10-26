import express from "express";

const app = express()

app.get('/games', (req,res) => {
    return res.status(200).json([]);
})

app.post('/ads', (req,res) => {
    return res.status(200).json([]);
})

app.get('/games/:id/ads', (req,res) => {
    const { id } = req.params;

    return res.status(200).json(id);
})

app.get('/games/:id/discord', (req,res) => {
    const { id } = req.params;

    return res.status(200).json(id);
})

app.listen(3333)