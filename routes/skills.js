let express = require('express');
let router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.index);

module.exports = router;
