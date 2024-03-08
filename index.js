const express = require('express')
const ejs = require('ejs')
const app = express();
const router = express.Router()
const port = 3000;


app.get('/',(req,res)=>{
    res.send('Page principale, test ')
})


app.post('/:id',(req,res)=>{
    const from = req.id=' De Jehovanny '
    const to = req.id=' passe très bien'
    res.send('La méthode post'+from + ' ' +to)
})

app.put('/',(req, res)=>{
    res.send('La méthode put')
})

app.delete('/',(req, res)=>{
    res.send('La méthode delete')
})


app.listen(port,(req,res)=>{
    console.log('Serveur en marche')
})