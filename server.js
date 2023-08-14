const express = require('express')
const app = express()
const pokemon = require('./models/pokemon')

app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine());

app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon',(req,res)=>{
    res.render("Index",{
        pokemon:pokemon
    })
})
app.get('/pokemon/:id',(req,res)=>{
    res.render('Show',{pkmIndex:req.params.id})
})



app.listen(3000,(req,res)=>{
    console.log('Listening to 3k')
})