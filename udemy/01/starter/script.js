// /*
// let js = "amazing";
// console.log("FIrsT LiNe");
// console.log(69);
//
// let firstName = "Nate";
// console.log(firstName);
//
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
//
// console.log(typeof javaScriptIsFun);
//
// javaScriptIsFun = "YES!";
// console.log(typeof javaScriptIsFun);
//
// let year;
// console.log(year);
// console.log(typeof year);
//
// year = 1991;
// console.log(typeof year);
//
// console.log(typeof null);
// */
//
// /*let age = 30;
// age = 31;
//
// const birthYear = 1991;
// birthYear = 1990;*/
//
// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);
//
// // const firstName = "Nate";
// // const job = "IT Consultant";
// // const birthYear = 1989;
// //
// // const nate = `I'm ${firstName} and I work as a ${job}. For those who care, I was born in ${birthYear}.`;
// // console.log(nate);
//
// const age = 5;
//
//
// if (age >= 18) {
//     console.log("You can start driving.");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`You are too young. Wait another ${yearsLeft} years. :)`);
// }
//
// const birthYear = 1989;
//
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
//
// console.log(century);
//

// // conversion
// const inputYear = "1989";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
//
// console.log(Number('Nate'));
// console.log(typeof NaN);
//
// console.log(String(23), 23);
//
// // type coercion
// console.log("I am " + 23 + " years old.");
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Nate"));
// console.log(Boolean({}));
// console.log(Boolean(''));
//
// const money = 0;
//
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job");
// }
//
// let height;
//
// if (height) {
//     console.log("Ht is defined");
// } else {
//     console.log("Ht is undefined");
// }

// const age = 18;
//
// if (age === 18) console.log("You just became an adult (STRICT)");
// if (age == 18) console.log("You just became an adult (LOOSE)");
//
// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);
//
// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number');
// } else if (favourite === 7) {
//     console.log("7 is also a cool number!");
// } else if (favourite === 9) {
//     console.log("9 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7 or 9.");
// }
//
// if (favourite !== 23) console.log("Why not 23?");


// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
//
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
//
// const shouldDrive = hasDriversLicense && hasGoodVision;
//
// // if (shouldDrive) {
// //     console.log("Sarah is able to drive.");
// // } else {
// //     console.log("Someone else should drive...");
// // }
//
// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);
//
// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive.");
// } else {
//     console.log("Someone else should drive...");
// }

// const day = "friday";
//
// switch (day) {
//     case "monday" :
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break
//     case "wednesday":
//     case "thursday" :
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day");
// }
//
// console.log("----IF BLOCK----");
//
// if (day === "monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend :D");
// } else {
//     console.log("Not a valid day!");
// }

// an EXPRESSION is a piece of code that produces a value
// a STATEMENT performs an action based on a value










