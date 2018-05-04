import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
 movies: Array<Movie> = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster: "https://i.imgur.com/SuW2ZlC.jpg",
    synopsis: "In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death...",
    genres: [
      "Crime", "Drama"
    ],
    year: 1994,
    director: "Frank Darabont",
    actors: [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler",
      "Clancy Brown",
      "Gil Bellows"
    ],
    hours: "Sunday 19:30, 22:30",
    room: 1
  }, {
    id: 2,
    title: "The Godfather",
    poster: "https://i.imgur.com/Uzvny9I.jpg",
    synopsis: "In late summer 1945, guests are gathered for the wedding reception of Don Vito Corleone's daughter Connie (Talia Shire) and Carlo Rizzi (Gianni Russo). Vito...",
    genres: [
      "Crime", "Drama"
    ],
    year: 1972,
    director: "Francis Ford Coppola",
    actors: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Richard S. Castellano",
      "Robert Duvall",
      "Sterling Hayden"
    ],
    hours: "Thursday 15:30, 20:30",
    room: 2
  }, {
    id: 3,
    title: "The Godfather Part II",
    poster: "https://i.imgur.com/abJNkWI.jpg",
    synopsis: "The Godfather Part II presents two parallel storylines. One involves Mafia chief Michael Corleone in 1958/1959 after the events of the first movie; the othe...",
    genres: [
      "Crime", "Drama"
    ],
    year: 1974,
    director: "Francis Ford Coppola",
    actors: [
      "Al Pacino",
      "Robert Duvall",
      "Diane Keaton",
      "Robert De Niro",
      "John Cazale",
      "Talia Shire"
    ],
    hours: "Monday 17:30, 22:30",
    room: 3
  }, {
    id: 4,
    title: "The Dark Knight",
    poster: "https://i.imgur.com/3jLPB46.jpg",
    synopsis: "The movie begins with a gang of men with clown masks breaking into the bank where the mob has a large portion of their money stashed. It begins with five cl...",
    genres: [
      "Action", "Crime", "Drama", "Thriller"
    ],
    year: 2008,
    director: "Christopher Nolan",
    actors: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
      "Gary Oldman"
    ],
    hours: "Tuesday 20:30, 22:30",
    room: 4
  }, {
  
    id: 5,
    title: "Schindler's List",
    poster: "https://i.imgur.com/IWZJOmu.jpg",
    synopsis: "The relocation of Polish Jews from surrounding areas to Krakow begins in late 1939, shortly after the outbreak of World War II, when the German Army defeats...",
    genres: [
      "Biography", "Drama", "History"
    ],
    year: 1993,
    director: "Steven Spielberg",
    actors: [
      "Liam Neeson",
      "Ben Kingsley",
      "Ralph Fiennes",
      "Caroline Goodall",
      "Jonathan Sagall",
      "Embeth Davidtz"
    ],
    hours: "Wednesday 19:30, 22:30",
    room: 5
  }
]

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    let movieInfo;
    this.movies.forEach((oneMovie) => {
      if(oneMovie.id.toString() === id) {
        movieInfo = oneMovie;
      }
    });

    return movieInfo;
  }

}


export class Movie {
  constructor (
    public id: number,
    public title: string,
    public poster: string,
    public synopsis: string,
    public genres:  Array<string>,
    public year: number,
    public director: string,
    public actors: Array<string>,
    public hours: string,
    public room: number
    
  ) { }
}