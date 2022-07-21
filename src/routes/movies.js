const { Router } = require('express')
const router = Router()
const movies = require('../sample.json')
const underscore = require('underscore')

/*movies.forEach(element => {
    console.log(element)
});*/

//First step is obtain the data from Database i nthis case from the archive ../sample.json
router.get('/', (req, res) => {
    res.json(movies)
});


router.post('/', (req, res) => {
    const {Title, Autor, Date, Ratting} = req.body;
    //console.log(Title,Autor,Date,Ratting);
    if(Title && Autor && Date && Ratting) {
        const id = movies[movies.length - 1].id + 1;
        const newMovie = {id,...req.body};
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({"error": "Wrong request"});  
    }
    
});

//DELETE
// splice is a method which delete a data from the array recive 2 params
// the first is the index the econd is how many datas will be eliminated
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    underscore.each(movies, (m, i) => {
        if(m.id == id){
            console.log(`Movie "${m.Title}" Eliminated`); 
            movies.splice(i, 1);  
        }
    });
    res.json(movies);
});

//PUT to update

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {Title, Autor, Date, Ratting} = req.body;

    if(Title && Autor && Date && Ratting){
        underscore.each(movies, (m, i) => {
            if(m.id == id){
                m.Title = Title;
                m.Autor = Autor;
                m.Date = Date;
                m.Ratting = Ratting; 
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({"error": "Wrong request"});
    }
});

module.exports = router