const express=require('express');
const routerActor = require('./actor.router');
const routerDirector = require('./director.router');
const routerMovie = require('./movie.router');
const routerGenre = require('./genre.router');
const router=express.Router();

//colocar las rutas aqui

router.use('/genres',routerGenre)
router.use('/actors',routerActor)
router.use('/directors',routerDirector)
router.use('/movies',routerMovie)

module.exports=router;