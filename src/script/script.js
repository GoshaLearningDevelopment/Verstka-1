const NumberOfFilms = prompt('Сколько фильмов вы поотрели', '');

const PersonalMovieDataBase=  {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    generes:[],
    private: false
};

const a = prompt('Last movie you saw?', ''),
      b = prompt('Your grade to this movie', ''),
      c = prompt('Last movie you saw?', ''),
      d = prompt('Your grade to this movie', '');

PersonalMovieDataBase.movies[a] = b;
PersonalMovieDataBase.movies[c] = d;

console.log(PersonalMovieDataBase);