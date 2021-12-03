let express = require('express');
let router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.index);

/* GET one skill based on id */
router.get('/:id', skillsCtrl.show);

// GET sorted skills 
// router.get('/sort', skillsCtrl.sort);

module.exports = router;
