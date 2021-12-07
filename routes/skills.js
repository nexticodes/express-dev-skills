let express = require('express');
let router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.index);

/* GET form for adding new skills */
router.get('/new', skillsCtrl.new);

/* POST new skill */
router.post('/', skillsCtrl.create);

/* PUT / UPDATE skill */
router.put('/:id', skillsCtrl.update);

/* DELETE a skill */
router.delete('/:id', skillsCtrl.delete);

/* GET update form for a skill */
router.get('/:id/edit', skillsCtrl.edit);

/* GET one skill based on id */
router.get('/:id', skillsCtrl.show);

// GET sorted skills 
// router.get('/sort', skillsCtrl.sort);

module.exports = router;
