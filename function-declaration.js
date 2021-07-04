/**
 * Function declaration is hoisted.
 * function expressions are not hoisted.
 * a function expression can be used as an IIFE (Immediately Invoked Function Expression), which runs as soon as it is defined.
 */

//printHello2();

printHello();

function printHello() {
  console.log("hello world!");
}

const printHello2 = function () {
  console.log("hello world!");
};

(function () {
  console.log("I am gonna be invoked as soon as possible");
})();

function aaa() {
  console.log("I am gonna be invoked as soon as possible");
}
aaa();
