/*while (condition) {
  //code
}*/

/*let i = 0;

while (i < 3) {
  alert(i);
  i++;
}*/

/*let i = 3;

while (i) {
    alert(i);
    i--;
}*/

/*let i = 3;
while (i) alert(i--);*/

/*do {
  //тело цикла
} while (condition);
*/
/*
let i = 0;

do {
  alert(i);
  i++;
} while (i < 3);
*/

/*for (начало; условие; шаг) {
    //тело цикла
}*/

/*for (let i = 0; i < 3; i++) {
  alert(i);
}*/

/*
let i;

for (i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}

alert(i); // 3
*/
/*
let i = 0;

for (; i < 3; i++) {
  // начало пропущено, оно уже было присвоено в переменную
  alert(i); // 0, 1, 2
}
*/
/*
var scores = [60, 59, 55, 61, 45, 58, 54, 60, 58];

var i = 0;

while (i < scores.length) {
  document.write("Bubbles #" + i + ": " + scores[i] + "</br>");
  i++;
}

document.write("Bubble tests: " + scores.length);
*/
/*
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break;
  summ += value;
}

alert("Summa: " + sum);
*/

/*
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  alert(i);
}
*/
/*
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
}
*/
// 0    1    2    3    4    5    6
/*let arrayNB = ["a", "b", "c", "d", "e", "f", "g"];
for (let i = 0; i < arrayNB.length; i++) {
  if (i % 2) {
    console.log(arrayNB[i]);
  }
}*/

/*
let i = 2;

if (i > 5) {
    alert(i);
} else {
    continue;
}
*/
/*
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значение координат (${i},${j})`, "");
    break outer;
  }
}

alert("Готово!");
*/
/*
labelName: for (...) {
    ...
}
*/
/*
//1) 
while () {

}

//2)
 do { 

} while ()

//3)

for (;;) {

}
*/

/*
let i = 3;

while (i) {
  console.log(--i);
}
*/
/*
let p = 0;
while (++p < 5) console.log(p); //1 2 3 4


let i = 0;

while (i++ < 5) console.log(i); //
*/
/*
for (let i = 0; i < 5; i++) console.log(i); //0 1 2 3 4

for (let p = 0; p < 5; ++p) console.log(p); //0 1 2 3 4
*/
/*
let i = 3;

while (i) {
  console.log(i--);
}

let p = 3;

while (p) {
  console.log(--p);
}
*/

/*
for (let i = 2; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/

/*
let i = 0;

while (i < 3) {
  alert(`number ${i}`);
  i++;
}
*/
/*
let num;

do {
  num = prompt("Enter a number > 100", 0);
} while (num <= 100 && num);
*/
/*
let i;

do {
  i = prompt("Enter a number > 100");
} while (i <= 100 && i);

alert("Finish");
*/

nextPrime: for (let i = 2; i <= 10; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}
