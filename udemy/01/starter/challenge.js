// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;
//
// function bmiCalc(ht, wt) {
//     return wt / (ht * ht);
// }
//
// const BMIMark = bmiCalc(heightMark, massMark);
// const BMIJohn = bmiCalc(heightJohn, massJohn);
// const markHigherBMI = BMIMark > BMIJohn;
//
// console.log(BMIMark, BMIJohn, markHigherBMI);
//
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}
