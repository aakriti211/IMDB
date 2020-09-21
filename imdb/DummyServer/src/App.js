const express = require("express");
const app = express();
const https = require("https");

// app.use(express.static("./build"));

// https.get("https://jsonmock.hackerrank.com/api/countries?page=2", (res) => {
//   let data = "";
//   res.on("data", (chunk) => {
//     data += chunk;
//   });

//   res.on("end", () => {
//     console.log(JSON.parse(data));
//   });
// });

let map = {};
for (var i = 1; i < 13; i++) {
  https.get(
    `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=${i}`,
    (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        let teamsData = JSON.parse(data);
        teamsData.data.forEach((element) => {
          if (map[element.team1]) {
            map[element.team1]++;
          } else {
            map[element.team1] = 1;
          }
          if (map[element.team2]) {
            map[element.team2]++;
          } else {
            map[element.team2] = 1;
          }
        });
      });
    }
  );
}

setTimeout(() => {
  console.log(map, "haha");
}, 5000);

app.get("/movies/all", (req, res) => {
  const response = [
    {
      id: "tsr",
      name: "The Shawshank Redemption",
      imdbRating: "9.2",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "tgf",
      name: "The Godfather",
      imdbRating: "9.1",
      icon:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL__QL50.jpg",
    },
    {
      id: "tgf2",
      name: "The Godfather: Part II",
      imdbRating: "9.0",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL__QL50.jpg",
    },
    {
      id: "tdk",
      name: "The Dark Knight",
      imdbRating: "9.0",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "12am",
      name: "12 Angry Men",
      imdbRating: "8.9",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "sl",
      name: "Schindler's List",
      imdbRating: "8.9",
      icon:
        "https://cdn11.bigcommerce.com/s-lj8wphc2lt/images/stencil/1280x1280/products/408/1101/SchindlersListCover-Web__39233.1543293824.jpg?c=2&imbypass=on",
    },
    {
      id: "pf",
      name: "Pulp Fiction",
      imdbRating: "8.9",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: "fc",
      name: "Fight Club",
      imdbRating: "8.8",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "fg",
      name: "Forrest Gump",
      imdbRating: "8.8",
      icon:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg",
    },
    {
      id: "in",
      name: "Inception",
      imdbRating: "8.7",
      icon: "https://irs.www.warnerbros.com/keyart-jpeg/inception_keyart.jpg",
    },
    {
      id: "tm",
      name: "The Matrix",
      imdbRating: "8.6",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "gfs",
      name: "Goodfellas",
      imdbRating: "8.6",
      icon:
        "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "s7",
      name: "Se7en",
      imdbRating: "8.6",
      icon:
        "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "cog",
      name: "City of God",
      imdbRating: "8.6",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNDJiNTEwMjMtOGQ1ZC00OTczLWFjZjctZWQ0MGJjZmFkMjcwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "lib",
      name: "Life is Beautiful",
      imdbRating: "8.6",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "it",
      name: "Interstellar",
      imdbRating: "8.5",
      icon:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "tlk",
      name: "The Lion King",
      imdbRating: "8.5",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "ps",
      name: "Psycho",
      imdbRating: "8.5",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "gl",
      name: "Gladiator",
      imdbRating: "8.5",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "cl",
      name: "City Lights",
      imdbRating: "8.5",
      icon:
        "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "wp",
      name: "Whiplash",
      imdbRating: "8.5",
      icon:
        "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "jk",
      name: "Joker",
      imdbRating: "8.4",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "rw",
      name: "Rear Window",
      imdbRating: "8.4",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYjJkZGVjMDMtMzNmZS00NDQ3LWE1YWEtMDlmYjExMTA4MGFkXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "on",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.5,
      name: "Onward",
    },
    {
      id: "tp",
      icon:
        "https://m.media-amazon.com/images/M/MV5BOTMyYTIyM2MtNjQ2ZC00MWFkLThhYjQtMjhjMGZiMjgwYjM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.0,
      name: "The Platform",
    },
    {
      id: "twt",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTI5NmViY2YtNDk5NC00NjY2LWFlNGYtOGEwNzY1MTZmMjFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 6.1,
      name: "Trolls World Tour",
    },
    {
      id: "tg",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.0,
      name: "The Gentlemen",
    },
    {
      id: "ex",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.0,
      name: "Extraction",
    },
    {
      id: "ouat",
      icon:
        "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.7,
      name: "Once Upon a Time... in Hollywood",
    },
    {
      id: "pr",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.6,
      name: "Parasite",
    },
    {
      id: "con",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTY3MDk5MDc3OV5BMl5BanBnXkFtZTcwNzAyNTg0Ng@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 6.7,
      name: "Contagion",
    },
    {
      id: "bbfl",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 6.8,
      name: "Bad Boys for Life",
    },
    {
      id: "ko",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.0,
      name: "Knives Out",
    },
  ];
  res.send(response);
});

app.get("/tvShows/all", (req, res) => {
  const response = [
    {
      id: "pe2",
      name: "Planet Earth II",
      imdbRating: "9.5",
      icon:
        "https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg",
    },
    {
      id: "pe",
      name: "Planet Earth",
      imdbRating: "9.4",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_.jpg",
    },
    {
      id: "bob",
      name: "Band of Brothers",
      imdbRating: "9.4",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UY1200_CR76,0,630,1200_AL_.jpg",
    },
    {
      id: "bb",
      name: "Breaking Bad",
      imdbRating: "9.4",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: "ch",
      name: "Chernobyl",
      imdbRating: "9.4",
      icon:
        "https://images-na.ssl-images-amazon.com/images/I/711BIyFlWUL._SX522_.jpg",
    },
    {
      id: "tw",
      name: "The wire",
      imdbRating: "9.3",
      icon:
        "https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "bp2",
      name: "Blue PlanetII",
      imdbRating: "9.3",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYjg2ODk0MjUtNmMzZS00MjY0LWI1YWMtN2JhMjRmZGUwY2I3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL__QL50.jpg",
    },
    {
      id: "op",
      name: "Our Planet",
      imdbRating: "9.3",
      icon:
        "https://m.media-amazon.com/images/M/MV5BN2I1ZjA5YjQtYmQ0ZS00ZmE1LTk1ZjktNTQ5ODIzY2JiZDdhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "got",
      name: "Game of Thrones",
      imdbRating: "9.2",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL__QL50.jpg",
    },
    {
      id: "casto",
      name: "Cosmos: A space time odyssey",
      imdbRating: "9.2",
      icon:
        "https://m.media-amazon.com/images/M/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "cos",
      name: "Cosmos",
      imdbRating: "9.2",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR5,0,182,268_AL__QL50.jpg",
    },
    {
      id: "ram",
      name: "Rick and Morty",
      imdbRating: "9.2",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMjRiNDRhNGUtMzRkZi00MThlLTg0ZDMtNjc5YzFjYmFjMmM4XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UY268_CR2,0,182,268_AL__QL50.jpg",
    },
    {
      id: "av",
      name: "Avatar: The Last Airbender",
      imdbRating: "9.2",
      icon:
        "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "ts",
      name: "The Sopranos",
      imdbRating: "9.2",
      icon:
        "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR3,0,182,268_AL__QL50.jpg",
    },
    {
      id: "tww",
      name: "The World War",
      imdbRating: "9.1",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYzExN2NhZDctOWEzMy00NzYwLTg3MDktNjYyNTQyOWY4MGYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR6,0,182,268_AL__QL50.jpg",
    },
    {
      id: "li",
      name: "Life",
      imdbRating: "9.1",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNjJhMTAxZjYtNWZkYy00Nzg1LTlkYjItZTNhZWRjNzkxMDg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR3,0,182,268_AL__QL50.jpg",
    },
    {
      id: "she",
      name: "Sherlock",
      imdbRating: "9.1",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "fab",
      name: "Fullmetal Alchemist: Brotherhood",
      imdbRating: "9.1",
      icon:
        "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR4,0,182,268_AL__QL50.jpg",
    },
    {
      id: "tvw",
      name: "The Vietnam War",
      imdbRating: "9.1",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYWQ4ZGFhYmUtNDVhNC00N2VkLWIzYTQtOTk5ZTI1NWU2YjNlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR9,0,182,268_AL__QL50.jpg",
    },
    {
      id: "ttz",
      name: "The Twilight Zone",
      imdbRating: "9.0",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "tba",
      name: "The Beatles Anthology",
      imdbRating: "9.0",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNjgwZmE1NDAtN2JhNy00ZGQ4LWFhMjEtZDVmZDExNzQwNDgwXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY268_CR10,0,182,268_AL__QL50.jpg",
    },
    {
      id: "hp",
      name: "Human Planet",
      imdbRating: "9.0",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMjdhZjQzYjYtM2FmNS00Y2ExLThjODEtZGQzY2M3OWYzYzc0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR3,0,182,268_AL__QL50.jpg",
    },
    {
      id: "per",
      name: "Persona",
      imdbRating: "9.0",
      icon:
        "https://m.media-amazon.com/images/M/MV5BOTJkNzJmYzgtZTZmNC00MTQ2LWE2ZGQtM2EyYjliNGViMTY5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY268_CR4,0,182,268_AL__QL50.jpg",
    },
    {
      id: "tbp",
      name: "The Blue Planet",
      imdbRating: "9.0",
      icon:
        "https://m.media-amazon.com/images/M/MV5BZGFhMGNmNDktYjY0Mi00YWE1LTlmMDQtZTBiNmU4NGYzZjZkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      id: "mh",
      icon:
        "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.5,
      name: "Money Heist",
    },
    {
      id: "oz",
      icon:
        "https://m.media-amazon.com/images/M/MV5BM2Q3MjQ3NDAtZDk4NS00MDIwLTllZGUtMmY1ZDU2OTJkNGY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.4,
      name: "Ozark",
    },
    {
      id: "tk",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYzI5MjQ2NzEtN2JmOC00MjE2LWI2NjItYTNjNTJjMjBkOWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.8,
      name: "Tiger King",
    },
    {
      id: "ww",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.7,
      name: "Westworld",
    },
    {
      id: "twd",
      icon:
        "https://m.media-amazon.com/images/M/MV5BYTUwOTM3ZGUtMDZiNy00M2I3LWI1ZWEtYzhhNGMyZjI3MjBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.2,
      name: "The Walking Dead",
    },
    {
      id: "cmm",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UY268_CR2,0,182,268_AL__QL50.jpg",
      imdbRating: 8.5,
      name: "Community",
    },
    {
      id: "bcs",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMGE4YzY4NGEtOWYyYS00ZDk2LWExMmMtZDIyODhiMmNlMGE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.7,
      name: "Better Call Saul",
    },
    {
      id: "ud",
      icon:
        "https://m.media-amazon.com/images/M/MV5BMGY4NzZlMDUtMzk2NC00OWEzLTkwMGUtYmFjN2E1YWZlNzRiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL__QL50.jpg",
      imdbRating: 8.2,
      name: "Unorthodox",
    },
    {
      id: "tftl",
      icon:
        "https://m.media-amazon.com/images/M/MV5BNmExMjg1NzgtZmFmMS00ZTEzLWJjODktMmI0ZTJmYjE4ZWRjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.5,
      name: "Tales from the Loop",
    },
  ];
  res.send(response);
});

app.get("/imdbPro-subscription", (req, res) => {
  const response = [
    {
      title: "1 month",
      subtitle: "₹ 199 per/month",
      text:
        "Watch on 1 screen at a time. Standard Definition available. Download videos on 1 phone or tablet.",
    },
    {
      title: "6 months",
      subtitle: "₹ 499 per/month",
      text:
        "Watch on 2 screens at a time. Full HD (1080p) available. Download videos on 2 phones or tablet.",
    },
    {
      title: "1 year",
      subtitle: "₹ 799 per/month",
      text:
        "Watch on 4 screens at a time. Full HD (1080p) and Ultra HD (4k) available. Download videos on 4 phones or tablet.",
    },
  ];
  res.send(response);
});

app.get("/trending-movies", (req, res) => {
  const response = [
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.5,
      name: "Onward",
      id: "on",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BOTMyYTIyM2MtNjQ2ZC00MWFkLThhYjQtMjhjMGZiMjgwYjM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.0,
      name: "The Platform",
      id: "tp",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTI5NmViY2YtNDk5NC00NjY2LWFlNGYtOGEwNzY1MTZmMjFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 6.1,
      name: "Trolls World Tour",
      id: "twt",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.0,
      name: "The Gentlemen",
      id: "tg",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.0,
      name: "Extraction",
      id: "ex",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.7,
      name: "Once Upon a Time... in Hollywood",
      id: "ouat",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.6,
      name: "Parasite",
      id: "pr",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTY3MDk5MDc3OV5BMl5BanBnXkFtZTcwNzAyNTg0Ng@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 6.7,
      name: "Contagion",
      id: "con",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 6.8,
      name: "Bad Boys for Life",
      id: "bbfl",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.0,
      name: "Knives Out",
      id: "ko",
    },
  ];
  res.send(response);
});

app.get("/trending-tv-shows", (req, res) => {
  const response = [
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.5,
      name: "Money Heist",
      id: "mh",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BM2Q3MjQ3NDAtZDk4NS00MDIwLTllZGUtMmY1ZDU2OTJkNGY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.4,
      name: "Ozark",
      id: "oz",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BYzI5MjQ2NzEtN2JmOC00MjE2LWI2NjItYTNjNTJjMjBkOWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.8,
      name: "Tiger King",
      id: "tk",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.7,
      name: "Westworld",
      id: "ww",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BYTUwOTM3ZGUtMDZiNy00M2I3LWI1ZWEtYzhhNGMyZjI3MjBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.2,
      name: "The Walking Dead",
      id: "twd",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UY268_CR2,0,182,268_AL__QL50.jpg",
      imdbRating: 8.5,
      name: "Community",
      id: "cmm",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMGE4YzY4NGEtOWYyYS00ZDk2LWExMmMtZDIyODhiMmNlMGE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 8.7,
      name: "Better Call Saul",
      id: "bcs",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BMGY4NzZlMDUtMzk2NC00OWEzLTkwMGUtYmFjN2E1YWZlNzRiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL__QL50.jpg",
      imdbRating: 8.2,
      name: "Unorthodox",
      id: "ud",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL__QL50.jpg",
      imdbRating: 9.3,
      name: "Game of Thrones",
      id: "got",
    },
    {
      icon:
        "https://m.media-amazon.com/images/M/MV5BNmExMjg1NzgtZmFmMS00ZTEzLWJjODktMmI0ZTJmYjE4ZWRjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      imdbRating: 7.5,
      name: "Tales from the Loop",
      id: "tftl",
    },
  ];
  res.send(response);
});

app.get("/marvel/all", (req, res) => {
  const response = [
    {
      name: "Wolverine",
      strength: 10,
      superPower: "Berserker Strength",
      type: "marvel",
    },
    {
      name: "Spider-Man",
      strength: 8,
      superPower: "Danger Sense",
      type: "marvel",
    },
    {
      name: "Thor",
      strength: 6,
      superPower: "Astral Projection",
      type: "marvel",
    },
    {
      name: "Iron Man",
      strength: 9,
      superPower: "Blast Power",
      type: "marvel",
    },
    {
      name: "Hulk",
      strength: 5,
      superPower: "Healing",
      type: "marvel",
    },
  ];
  res.send(response);
});

app.get("/dc/all", (req, res) => {
  const response = [
    {
      name: "Hal Jordan",
      strength: 4,
      superPower: "Hypnosis",
      type: "dc",
    },
    {
      name: "Batman",
      strength: 10,
      superPower: "Escape Artist",
      type: "dc",
    },
    {
      name: "Dick Grayson",
      strength: 6,
      superPower: "Stamina",
      type: "dc",
    },
    {
      name: "Cyclone",
      strength: 8,
      superPower: "Super Hearing",
      type: "dc",
    },
    {
      name: "Superman",
      strength: 10,
      superPower: "Heat Vision",
      type: "dc",
    },
  ];
  res.send(response);
});
app.listen(5000, () => {
  console.log("Dummy server started on port 5000");
});
