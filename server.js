const express = require('express')
const app = express()
const pokemon = require('./models/pokemon')
const mongoose = require('mongoose')
const Pokemon = require('./models/PokeInput.js')
const methodOverride = require('method-override')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo')
})
//------Middleware-------------
app.use(express.json({ extended: false }))
// app.use(express.static(__dirname + '/public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
// const getData = async()=>{
//     let response = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
// }
// const pkmList = async(info)=>{
//     data.map((pkm)=>{

//     })
// }
// //---------SEED--------
// app.get('/pokemon/seed',async(req,res)=>{
//     //Deleting All Current Data(optional)
//     await Pokemon.deleteMany({}) //PokemonSchema
//     //create a list of pokemon
//     await Pokemon.create(pokemon) //imported pokemon data array
//     res.redirect('/pokemon')
// })
//------Routes---------
//Get/Read Routes C[R]UD
app.get('/', (req, res) => {
    res.send('<a href="/pokemon">List</a>')
})
app.get('/pokemon', (req, res) => {
    Pokemon.find({}).then((allPkm) => {
        res.render("Index", {
            pokemon: allPkm
        })
    })
})
//Post/Create Routes [C]RUD
app.post('/pokemon', async (req, res) => {
    console.log(req.body)
    await Pokemon.create(req.body)
    res.redirect('/pokemon')
})
app.get('/pokemon/newpkm', (req, res) => {
    res.render('NewPkm')
})

//Delete Route CRU[D]------------------
app.delete('/pokemon/:id',(req,res)=>{
    Pokemon.findByIdAndDelete(req.params.id).then(
    res.redirect('/pokemon'))
})
//Edit/Update Route CR[U]D
app.get('/pokemon/:id/edit',(req,res)=>{
    Pokemon.findById(req.params.id).then((foundPkm)=>{
        res.render('EditPkm',{
            pokemon:foundPkm
        })
    })
})
//Update
app.put('/pokemon/:id',(req,res)=>{
    Pokemon.findByIdAndUpdate(req.params.id,req.body).then(
        res.redirect(`/pokemon`))
})

app.get('/pokemon/:id', async (req, res) => {
        const eachPkm = await Pokemon.findById(req.params.id)
        res.render('Show', {
            pokemon: eachPkm
        })

})


// app.delete('/pokemon/edit', (req, res) => {

// })

app.listen(3000, (req, res) => {
    console.log('Listening to 3k')
})