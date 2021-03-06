//Bmi practice
var lucas_bmi=  (78 / 1.69 ** 2);
var john_bmi=   (95 / 1.88 ** 2);
Boolean lucasHigherBMI = lucasBMI > johnBMI;

console.log(lucasHigherBMI);

var lucasBMI2 = (95 / 1.88 ** 2);
var johnBMI2 = (85 / 1.76 ** 2);

Boolean lucasHigherBMI2 = lucasBMI2 > johnBMI2;

console.log(lucasHigherBMI2);

// Temperature Converter

var c = 30;

const convertC = (c * 9) / 5 + 32;

console.log(c +"  "+ "Celcius", f + " " + "F");

var f = 86;

const convertF = ((f - 32) * 5) / 9;

console.log(f + "Farenheit", c + "Celcius");

// Basketball Average

const team1 = "Knicks";
const team2 = "Nets";

const t1game1 = 95;
const t1game2 = 108;
const t1game3 = 89;

const t2game1 = 88;
const t2game2 = 91;
const t2game3 = 110;

var t1average = (t1game1 + t1game2 + t1game3 / 3);
var t2average = (t2game1 + t2game2 + t2game3 / 3);

if (t1average < t2average) {
  console.log(team1 + "Average is :", t1average, team2 + " Average is :", t2average);
  console.log(team2, "is the winner!");
  }
else if (t1average > t2average) {
  console.log(team1 + "Average is :", t1average, team2 + " Average is :", t2average);
  console.log(team1, "is the winner!");
  }
else
{
  console.log("It is a tie!");
}
