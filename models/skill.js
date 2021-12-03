module.exports = {
    getAll,
    getOne,
    sortByProficiency
}

const skills = [
    {
        id: 00,
        skill: 'HTML',
        proficiency: 5
    },
    {
        id: 01,
        skill: 'CSS',
        proficiency: 4
    },
    {
        id: 02,
        skill: 'JavaScript',
        proficiency: 5
    },
    {
        id: 03,
        skill: 'Node',
        proficiency: 3
    },
    {
        id: 04,
        skill: 'Express',
        proficiency: 3
    },
    {
        id: 05,
        skill: 'MongoDB',
        proficiency: 2
    },
    {
        id: 06,
        skill: 'React',
        proficiency: 3
    },
    {
        id: 07,
        skill: 'Python',
        proficiency: 1
    },
    {
        id: 08,
        skill: 'C#',
        proficiency: 2,
    },
    {
        id: 09,
        skill: 'Java',
        proficiency: 1
    },
    {
        id: 10,
        skill: 'Object Oriented Programming',
        proficiency: 2,
    },
    {
        id: 11,
        skill: 'MERN Stack',
        proficiency: 2,
    },
    {
        id: 12,
        skill: 'MySQL',
        proficiency: 2
    },
    {
        id: 13,
        skill: 'React Native',
        proficiency: 2
    },
];



function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(s => s.id == id);
}

function sortByProficiency() {
    return skills.sort((a, b) => a.proficiency - b.proficiency);
}
