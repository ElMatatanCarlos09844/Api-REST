# install

1. npm i express morgan, npm install node-fetch@2, underscore, nodemon

# use

- node src/index.js

## In the navigator

- **Home** http://localhost:3000/
### GET
- **Home** http://localhost:3000/test
- **Movies** http://localhost:3000/api/movies
- **users** http://localhost:3000/api/users

### POST
- **movies** http://localhost:3000/api/movies
sending a data in body like:
{
    "Title": "Aliens",
    "Autor": "James Cameron",
    "Date": "2015",
    "Ratting": "⭐⭐⭐⭐"
}

### DELETE
- **Movies** http://localhost:3000/api/movies/id
The id of the movie.

### PUT
- **Movies** http://localhost:3000/api/movies/id
The id of the movie.
sending a data in body like:
{
    "Title": "Aliens",
    "Autor": "James Cameron",
    "Date": "2015",
    "Ratting": "⭐⭐⭐⭐"
}