const { json, urlencoded } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//middleware to porcess the data
//app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes to create the API routes from ./routes/index.js
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// PORT Starting the port
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});