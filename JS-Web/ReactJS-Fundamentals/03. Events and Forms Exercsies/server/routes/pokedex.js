const express = require('express')

const router = new express.Router()

const pokemons = require('./../data/pokemons')


router.post('/create',(req,res,next)=>{
    console.log(req.body);
        pokemons.addPokem((req.body));
        return res.status(200).json(pokemons[pokemons.length - 1]);
})

router.get('/pokedex',(req,res,next)=>{
    console.log('getting')
    console.log(pokemons.retrivePokemons())
    let pokemonColection = (pokemons.retrivePokemons())
    return res.status(200).json({
        pokemonColection
    })
})

module.exports = router