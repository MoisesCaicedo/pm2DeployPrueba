import express from 'express'
import { config } from 'dotenv'

const env = `${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ""}.env`
console.log(env)

const result = config({ path: env })
result.error ? process.exit(1) : console.log("Enviroment config")

const app = express()
app.get("/", (req, res) => res.send({ ENV: process.env.NODE_ENV, nuevo: "Hola mundo" }))



app
    .listen(process.env.NODE_PORT,
        () => { console.log(`APP start on port ${process.env.NODE_PORT}`) }
    )
