const Skill = require('../models/skill.js');

module.exports = {
    index,
    show,
    // sort
    new: newSkill,
}

function index(req,res){
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req,res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    });
}

function newSkill(req,res){
    res.render('skills/new');
};

// function sort(req, res){
//     console.log("Hello World");
// }