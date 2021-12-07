const Skill = require('../models/skill.js');

module.exports = {
    index,
    show,
    create,
    edit,
    update,
    new: newSkill,
    delete: remove,
    // sort
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

function create(req,res){
    Skill.add(req.body);
    res.redirect('/skills');
}

function remove(req, res){
    Skill.removeOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res){
    res.render('skills/update', {skill: Skill.getOne(req.params.id)});
}

function update(req, res){
    const { id } = req.params;
    const { skill, proficiency } = req.body;
    Skill.update({id, skill, proficiency});
    res.redirect(`/skills/${id}`);
}

// function sort(req, res){
//     console.log("Hello World");
// }