console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//for (let i = 0; i < 100; i++) {
 ///   if (i % 2 == 0) {
  //      continue;
  // }   else {
//        console.log(i);
 //   }
//}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

//for (let i = 1; i < 100; i++) {
   // if (i % 3 == 0 && i % 5 == 0) {
  //      console.log(i, "FIZZBUZZ");
 //   }
 //   else {
 //       if (i % 3 == 0) {
 //           console.log(i, "FIZZ");
 //   }
 //   else{
 //       if (i % 5 == 0) {
 //           console.log(i, "BUZZ");
 //       }
//}  
    
//    }
//}

//Exercise 3 (it works just different from Hunter's example)

//let i = 1;

//while (i <= 100) {
 //   let output = "";

 //   if (i % 3 == 0) {
 //       output += "FIZZ";
 //   }

  //  if (i % 5 == 0) {
 //       output += "BUZZ";
 //   }

//    console.log(i, output);
//i++;
//}

//let x = 1;
//do {
//    let output= "";

 //   if (x % 3 == 0) {
 //       console.log(x, "FIZZ");
 //   }

 //   else if (x % 5 == 0) {
  //     console.log(x, "BUZZ");
//x++;
//} while (x <= 100);

// EXERCISE 4

//let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
//let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

//for (let i = 1; i <= n; i++) {
 //   if (i == value) {
  //      console.log("Found the value!");
 //       break;
 //   }
  //  else if (i == n) {
 //       console.log("Didn't Find the value!");
//    }
//} 


//EXERCISE 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let i = start; i <=end; i++) {

    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(i, "BUZZFIZZ");
    }
    else if (i % fizzDivisor == 0) {
      console.log(i, "FIZZ");
    }

    if (i % buzzDivisor == 0) {
      console.log(i, "BUZZ");
}
}
