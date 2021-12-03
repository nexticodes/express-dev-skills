module.exports = {
    index,
    show
}

const Skill = require('../models/skill.js')


function index(req,res){
    res.render('index', Skill.getAll());
}

function show(req,res){
    let skill = Skill.getOne(req.params.id);
    res.render('skills', skill);
}