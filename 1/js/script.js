/*jslint node: true */
'use strict';

import PersonalMovieDB from './PersonalMovieDB.js';
let userDB = new PersonalMovieDB(0, {}, {}, [], false);


userDB.start();
userDB.detectPersonalLevel();
userDB.rememberMyFilms();
userDB.writeYourGenres();
userDB.showMyDB();







