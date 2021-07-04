const student = {
    name: 'Anna',
    level: 1,
    isPassed: false
}

const subjects = ['Korean', 'Society', 'History'];

const name1 = student.name;
const level1 = student.level;
const isPassed1 = student.isPassed;

console.log(`name is: ${name1}, level is: ${level1}, isPassed is: ${isPassed1}`);

const {name2, level2, isPassed2} = student;
console.log(`name is: ${name2}, level is: ${level2}, isPassed is: ${isPassed2}`);

const {name, level, isPassed} = student;
console.log(`name is: ${name}, level is: ${level}, isPassed is: ${isPassed}`);

const [math, english, korean] = subjects;
console.log(`the first subject is: ${math}, the second subject is: ${english}, the third subject is: ${korean}`);