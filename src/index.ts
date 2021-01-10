import { CONFIG } from './config'
import express from 'express'


const app = express()
app.get("/",
    (req, res) => res.send({ ENV: CONFIG.ENV, nuevo: "Hola mundo como vamos todos" })
)

app.listen(process.env.NODE_PORT,
    () => { console.log(`APP start on port ${CONFIG.PORT}`) }
)
