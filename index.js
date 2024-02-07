const express = require('express')
const ejs = require('ejs')


const app = express();
const router = express.Router()
const port = 3000;


app.get('/',(req,res)=>{
    res.send('Page principale')
})


app.post('/:id',(req,res, next)=>{
    const from = req.id=' De Jehovanny '
    const to = req.id=' passe très bien'
    res.send('La méthode post'+from + ' ' +to)
    next()
})

app.put('/',(req, res)=>{
    res.send('La méthode put')
})

app.delete('/',(req, res)=>{
    res.send('La méthode delete')
})


// app.use((req,res, next)=>{
//     res.send('/:d', body) next()
// })
app.listen(port,(req,res)=>{
    console.log('Serveur en marche')
})