import express from "express";
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
import { convertHourStringToMin, convertMinToHour } from "./utils/convert-hour-string-to-min";

const app = express();
const prisma = new PrismaClient({
    log:['query'] 
});

app.use(express.json())
app.use(cors())

app.get('/games', async (req,res) => {
    const games = await prisma.game.findMany({
        include: {
            _count:{
                select: {
                    ads: true
                }
            }
        }
    })

    return res.status(200).json(games);
})

app.post('/games/:id/ads', async (req,res) => {
    const gameId = req.params.id;
    const ads = req.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: ads.name,
            yearPlaying: ads.yearPlaying,
            discord: ads.discord,
            weekDays: ads.weekDays.join(','),
            hourStart: convertHourStringToMin(ads.hourStart),
            hourEnd: convertHourStringToMin(ads.hourEnd),
            useVoiceChannel: ads.useVoiceChannel, 
        }
    })

    return res.status(200).json(ad);
})

app.get('/games/:id/ads', async (req,res) => {
    const id = req.params.id;

    const ads = await prisma.ad.findMany({
        select:{
            id: true,
            name: true,
            yearPlaying: true,
            weekDays: true,
            hourStart: true,
            hourEnd: true,
            useVoiceChannel: true,
            createdAt: true,
        },
        where: {
            gameId: id
        }, orderBy:{
            createdAt: 'desc'
        }
    })

    return res.status(200).json(ads.map(ad =>{
        return {
            ...ad, 
            weekDays: ad.weekDays.split(","), 
            hourStart: convertMinToHour(ad.hourStart),
            hourEnd: convertMinToHour(ad.hourEnd),
        }
    }));
})

app.get('/games/:id/discord', async (req,res) => {
    const idAd = req.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select:{
            discord: true,
        },
        where: {
            id: idAd
        }
    })
    return res.status(200).json({
        discord: ad.discord
    });
})

app.listen(3333)