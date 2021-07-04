function printName(name){
    const yourName = name || 'Guest';
    console.log(yourName);
}

function printName2(name) {
    const yourName = name ?? 'Guest';
    console.log(yourName);
}

ex1 = 'Henry';
ex2 = '';
ex3 = false;
ex4 = 0;
ex5 = undefined;
ex6 = null;

console.log('using first function: default val is assigned using || ');
printName(ex1);
printName(ex2); // should be ''
printName(ex3); // should be nothing
printName(ex4); // should be 0
printName(ex5); 
printName(ex6); 

console.log('using second function: default val is assigned using ?? ');
printName2(ex1);
printName2(ex2);
printName2(ex3);
printName2(ex4);
printName2(ex5);  // undefined null 
printName2(ex6); 