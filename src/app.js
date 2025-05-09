import Time from "./time.js"
import express from "express"
const app = express()

app.get('/', (req, res) => {
res.send("Bienvenido a mi servidor ")
})

app.get('/hora', (req, res) => {
res.send(Time.traerHorario())
})

app.get('/fecha-completa', (req, res) => {
    res.send(Time.traerFecha())
    })

    

export default app