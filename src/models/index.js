const Movie=require("./Movie")
const Actor=require("./Actor")
const Director = require("./Director")
const Genre = require("./Genre")

//movie puede tener muchos actores atravez de movieActros
Movie.belongsToMany(Actor,{through:'movieActors'})
Actor.belongsToMany(Movie,{through:'movieActors'})

Movie.belongsToMany(Director,{through:'movieDirectors'})
Director.belongsToMany(Movie,{through:'movieDirectors'})

Movie.belongsToMany(Genre,{through:"moviesGenres"})
Genre.belongsToMany(Movie,{through:"moviesGenres"})