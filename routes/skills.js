let express = require('express');
let router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.index);

/* GET form for adding new skills */
router.get('/new', skillsCtrl.new);

/* GET one skill based on id */
router.get('/:id', skillsCtrl.show);

// GET sorted skills 
// router.get('/sort', skillsCtrl.sort);

module.exports = router;
