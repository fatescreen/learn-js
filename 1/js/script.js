"use strict";

import PersonalMovieDB from './PersonalMovieDB.js';

script();

function script(){
    let db = new PersonalMovieDB(0, {}, {}, [], false);
        
    db.count = prompt('Сколько фильмов вы уже посмотрели?', 2); 
    
    for (let i = 0; i < db.count; i++)
    {
        
        let answer = ask();
        let name = answer.movieName;
        let rating = answer.movieRating;
    
        db.movies[name] = rating;
    }

    console.log(db.movies);
}

function ask(){
    
    let movieName = prompt("Один из последних просмотренных фильмов?");
    let movieRating = prompt("На сколько оцените его?");

    return {movieName, movieRating};
}





