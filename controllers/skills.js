const Skill = require('../models/skill.js');

module.exports = {
    index,
    show
}

function index(req,res){
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req,res){
    let skill = Skill.getOne(req.params.id);
    res.render('skills/skill', skill);
}
