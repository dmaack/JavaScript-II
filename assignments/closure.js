// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function school(schoolName) {
  const module1= 'UI'
  const module2='JavaScript'
  console.log(`${schoolName} is a school that offers ${module1} and ${module2} as part of their first learning topics`);
  function classRoom(className) {
    const cohort= 'Web23'
    function student(studentName){
      console.log(`${studentName} is part of the ${className} ${cohort} cohort at ${schoolName}  where she has completed ${module1} and ${module2} modules in her first 3 weeks of school`)
    }//closes student
    student('Dominique');
  }//closes class
  classRoom('Web Development')
}//closes school
school('Lambda')
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0

function counter(){
  return increment(count);
}
return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
