const  {Router} = require('express');
//we require our roman controller here
const romanController = require('./controllers/romanController');


const router = Router();
//the route for the POST method
router.post('/custom-arabic', romanController.ConvertOnePost);
//the route for the GET method
router.get('/custom-arabic/:number(\\d+)', romanController.ConvertOneGet);
//the route for test
router.get('/test', romanController.test);

module.exports = router;