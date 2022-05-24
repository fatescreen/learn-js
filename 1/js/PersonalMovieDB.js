export default class PersonalMovieDB {
    constructor(count, movies, actors, genres, privat){
        this.count = count;
        this.movies = movies;
        this.actors = actors;
        this.genres = genres;
        this.privat = privat;
    }
    
    showMyDB(){
        if (this.privat == false)
        {
            console.log(this);
        }
    }
    
    writeYourGenres(){
        for (let i = 1; i <= 3; i++){
            let input = prompt("Ваш любимый жанр под номером "+ i);
            // console.log(this.genres[i-i] === (null || '' || 0));
            let isEmpty = (input == null) || (input == '') || (input == 0);

            while (isEmpty){
                input = prompt("Ваш любимый жанр под номером "+ i);
                isEmpty = (input == null) || (input == '') || (input == 0);
            }
            this.genres[i-1] = input;
        }

        this.genres.forEach(element => {
            console.log(`Любимый жанр ${this.genres.indexOf(element) + 1} - это ${element}`);
        });
    }
    
    start(){
        this.count = prompt('Сколько фильмов вы уже посмотрели?', 2);
    }
    
    rememberMyFilms(){
    
        for (let i = 0; i < this.count; i++){
            let answer = this.ask();
            let name = answer.movieName;
            let rating = answer.movieRating;      
    
            this.movies[name] = rating;
        }
    }
    
    detectPersonalLevel(){
        if (this.count < 10){
            alert("Просмотрено довольно мало фильмов");
        }
        else if (this.count >= 10 && this.count < 30){
            alert("Вы классический зритель");
        }
        else if (this.count >= 30){
            alert("Вы киноман!");
        }
        else {
            alert("Произошла ошибка!");
        }
    }
    
    ask(){
        let movieName = prompt("Один из последних просмотренных фильмов?");
        let isNeedToAskAgain = (movieName === '') || (movieName.length > 50);
    
        if (isNeedToAskAgain){
            alert("Невалидный ввод :( ");
            return ask();
        }
    
        let movieRating = prompt("На сколько оцените его?");
    
        return {movieName, movieRating};
    }

    toggleVisible(){
        this.privat = (this.privat === true) ? (false) : (true);
    }
}

