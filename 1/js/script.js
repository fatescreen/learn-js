"use strict";

import PersonalMovieDB from './PersonalMovieDB.js';

script();

function script(){
    let userDB = new PersonalMovieDB(0, {}, {}, [], false);
        
    userDB.count = prompt('Сколько фильмов вы уже посмотрели?', 2); 

    for (let i = 0; i < userDB.count; i++)
    {
        
        let answer = ask();
        let name = answer.movieName;
        let rating = answer.movieRating;
    
        userDB.movies[name] = rating;
    }

    console.log(userDB.movies);
}

function ask(){
    
    let movieName = prompt("Один из последних просмотренных фильмов?");
    let movieRating = prompt("На сколько оцените его?");

    return {movieName, movieRating};
}





