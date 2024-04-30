const school = {
    lessons: [
        {
            course: "Python",
            students: 20,
            professor: "Carlos Patrício",
            shift: "Manhã",
        },
        {
            course: "Kotlin",
            students: 10,
            professor: "Gabriel Oliva",
            shift: "Noite",
        },
        {
            course: "JavaScript",
            students: 738,
            professor: "Gustavo Caetano",
            shift: "Tarde",
        },
        {
            course: "MongoDB",
            students: 50,
            shift: "Noite",
        },
    ],
};
/* 1-Crie uma função que obtenha o valor da chave de acordo com sua posição no array.
Essa função deve possuir dois parâmetros: o objeto e a posição no array. */

const getValueByIndexSchool = (object, index) => Object.values(object.lessons)[index];

console.log(getValueByIndexSchool(school, 0));

/* 2 - Crie uma função que retorne a soma do número total de estudantes em todos os cursos. */

const totalStudents = (object) => {
    let amount = 0;
    for (let i = 0; i < object.lessons.length; i += 1) {
        amount += (object.lessons[i]).students;
    }
    return amount;
};

console.log(`Total de estudantes ${totalStudents(school)}`);

/* 3 - Crie uma função que verifica se uma determinada chave existe em todos os elementos do array
lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros:
o objeto e o nome da chave. */

const verifyKeyExists = (object, key) => {
    for (let j = 0; j < object.lessons.length; j += 1) {
        if (object.lessons[j][key] === undefined) {
            return false;
        }
    }
    return true;
};

console.log(verifyKeyExists(school, "course"));

/* 4- Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três
parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave. */

const changeShift = (object, course, shift) => {
    let findCourse;
    for (let k = 0; k < object.lessons.length; k += 1) {
        const element = object.lessons[k];
        if (element.course === course) {
            findCourse = element;
            break;
        }
    }

    if (findCourse !== undefined) {
        findCourse.shift = shift;
        return findCourse;
    }
    return "Curso não encontrado.";
};
console.log(changeShift(school, "Python", "Noite"));
