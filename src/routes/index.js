const {Router} = require('express');
const router = Router();

// Routes to create the API routes
router.get('/', (req, res) => {
    res.json({"Title": "Main"});
});

router.get('/test', (req, res) => {
    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    const data = {
        "Name": "Carlos",
        "Fecha": output
    };
    res.json(data)
})


module.exports = router;