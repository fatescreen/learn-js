/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const movies = movieDB.movies;
const ads = Array.from(document.getElementsByClassName("promo__adv"));
const watchedMovies = document.querySelector(".promo__interactive-list");
const form = document.querySelector("form.add");
const input = form.querySelector(".adding__input");
const checkBox = form.querySelector('[type="checkbox"]');



configuration();
form.addEventListener("submit", formSubmitCallback);
updateMovies(movieDB.movies, watchedMovies);



function configuration(){
    ads.forEach(element => {
        element.remove();
    });

    document.querySelector(".promo__genre").innerHTML = "ДРАМА";
    document.querySelector(".promo__bg").style.backgroundImage = 'url("img/bg.jpg")';
}

function updateMovies(movies, moviesElement){    
    moviesElement.innerHTML = '';
    movies.sort();

    movies.forEach(element => {
        moviesElement.innerHTML += `<li class="promo__interactive-item">
            ${element}
            <div class="delete"></div>
            </li>`;
    });

    
}

function formSubmitCallback(event){
    const maxInputSymbols = 21;
    event.preventDefault();
    let isInputTooLong = (String(input.value).length >= maxInputSymbols);

    if (isInputTooLong === false){
        movies.push(input.value);
    }
    else if (isInputTooLong === true){
        let cuttedInput = String(input.value).substring(0, maxInputSymbols) + "...";        
        movies.push(cuttedInput);
    }

    updateMovies(movies, watchedMovies);
}



console.log(form);
