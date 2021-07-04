// https://www.youtube.com/watch?v=3CUjtKJ7PJg
// 드림코딩 by 엘리 연습

ids = [1, 2, 3, 4, 5, 6, 7];

ids2 = ids.filter((el) => el === 1);
console.log(ids2);
console.log(ids);

letsdouble = ids.map((el) => el * 2);
console.log(ids);
console.log(letsdouble);
{
  const fruits = ["apple", "banana", "orange"];
  fruits_str = fruits.toString();
  fruits_str2 = fruits.join(" and ");
  console.log(fruits_str);
  console.log(fruits_str2);
}
{
  const fruits = "apple, banana, orange";
  fruits_arr = fruits.split(",").map((el) => el.trim());
  console.log(fruits_arr);
}
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}
{
  const array = [1, 2, 3, 4, 5];
  arrayNew = array.slice(2);
  console.log(arrayNew);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

{
  console.log("========== answer to Q5 ============");
  const answer = students.find((s) => s.score === 90);
  const answer2 = students.filter((s) => s.score === 90);
  console.log(answer); // find returns an element of an array (the first element!)
  console.log(students); // filter returns an array
  console.log("--------------------");
  console.log(answer2);
  console.log(students);
}

// Q6. make an array of enrolled students
{
  console.log("========== answer to Q6 ============");
  const answer = students.filter((s) => s.enrolled);
  console.log(answer);
}

// Q7. make an array containing only the students' scores
{
  console.log("========== answer to Q7 ===========");
  const answer = students.map((s) => s.score);
  console.log(answer);
}

// Q8. check if there is a student with the score lower than 50
{
  console.log("========== answer to Q8 ===========");
  const answer = students.some((s) => s.score < 50);
  console.log(answer);

  const answer2 = students.every((s) => s.score < 50);
  console.log(answer2);
}
//  Q9. compute students' average score
{
  console.log("========== answer to Q9 ===========");
  const answer =
    students.map((s) => s.score).reduce((a, c) => a + c) / students.length;
  console.log(answer);
}
// Q10. make a string containing all the scores
{
  console.log("========== answer to Q10 ===========");
  const answer = students.map((s) => s.score).join(",");
  console.log(answer);
}
// Bonus, do Q10 sorted in ascending order
{
  console.log("========== answer to QBonus ===========");
  const answer = students
    .map((s) => s.score)
    .sort()
    .join(",");
  console.log(answer);
}
