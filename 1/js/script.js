/*jslint node: true */
'use strict';

import PersonalMovieDB from './PersonalMovieDB.js';
let userDB = new PersonalMovieDB(0, {}, {}, [], false);


start();
detectPersonalLevel();
rememberMyFilms();

function start(){
    userDB.count = prompt('Сколько фильмов вы уже посмотрели?', 2);
}

function rememberMyFilms(){

    for (let i = 0; i < userDB.count; i++){
        let answer = ask();
        let name = answer.movieName;
        let rating = answer.movieRating;      

        userDB.movies[name] = rating;
    }

    console.log(userDB.movies);
}

function detectPersonalLevel(){
    if (userDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    }
    else if (userDB.count >= 10 && userDB.count < 30){
        alert("Вы классический зритель");
    }
    else if (userDB.count >= 30){
        alert("Вы киноман!");
    }
    else {
        alert("Произошла ошибка!");
    }
}

function ask(){
    
    let movieName = prompt("Один из последних просмотренных фильмов?");
    let isNeedToAskAgain = (movieName === '') || (movieName.length > 50);

    if (isNeedToAskAgain){
        alert("Невалидный ввод :( ");
        return ask();
    }

    let movieRating = prompt("На сколько оцените его?");

    return {movieName, movieRating};
}





