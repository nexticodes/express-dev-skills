module.exports = {
    getAll,
    getOne,
    sortByProficiency,
    add,
    removeOne,
    update
}

const skills = [
    {
        id: 00,
        skill: 'HTML',
        proficiency: 5,
        relearn: true
    },
    {
        id: 01,
        skill: 'CSS',
        proficiency: 4,
        relearn: true
    },
    {
        id: 02,
        skill: 'JavaScript',
        proficiency: 5,
        relearn: true
    },
    {
        id: 03,
        skill: 'Node',
        proficiency: 3,
        relearn: true
    },
    {
        id: 04,
        skill: 'Express',
        proficiency: 3,
        relearn: true
    },
    {
        id: 05,
        skill: 'MongoDB',
        proficiency: 2,
        relearn: true
    },
    {
        id: 06,
        skill: 'React',
        proficiency: 3,
        relearn: true
    },
    {
        id: 07,
        skill: 'Python',
        proficiency: 1,
        relearn: true
    },
    {
        id: 08,
        skill: 'C#',
        proficiency: 2,
        relearn: false
    },
    {
        id: 09,
        skill: 'Java',
        proficiency: 1,
        relearn: true
    },
    {
        id: 10,
        skill: 'Object Oriented Programming',
        proficiency: 2,
        relearn: true
    },
    {
        id: 11,
        skill: 'MERN Stack',
        proficiency: 2,
        relearn: false
    },
    {
        id: 12,
        skill: 'MySQL',
        proficiency: 2,
        relearn: false
    },
    {
        id: 13,
        skill: 'React Native',
        proficiency: 2,
        relearn: true
    },
];



function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(s => s.id == id);
}

function add(skill){
    skill.id = skills.length + 1;
    skill.relearn = (skill.proficiency < 3);
    skills.push(skill); 
}

function removeOne(id){
    const idx = skills.findIndex(s => s.id == id);
    skills.splice(idx, 1);
}

function update(data){
    const {id, skill, proficiency} = data;
    const s = getOne(id);
    s.skill = skill;
    s.proficiency = proficiency;
    s.relearn = proficiency < 3;
}

function sortByProficiency() {
    return skills.sort((a, b) => a.proficiency - b.proficiency);
}
