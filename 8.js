let meal = "breakfast";
switch (meal) {
  case "breakfast":
    console.log("coffee + bagel + Sandwich");
    break;
  case "lunch":
    console.log("coffee + bagel + Sandwich");
    break;
  case "dinner":
    console.log("pasta");
    break;
    default
    console.log("No food available :()");
}


console.log("MICROWAVE")
function foodFor4(originalFood) {

    return originalFood * 4;
}

function timeFor4(originalTime) {

    return originalTime * 4;
}

function microwave(foodWeight, time, mode) {

    const food4 = foodFor4(INT(foodWeight));
    const time4 = timeFor4(INT(time));

    const readyToEat = `Your food weight is going to be ${food4} for 4 people. It will be heated for ${time4} mins under ${mode}`
    return console.log(readyToEat);
}

let tip = parseInt(prompt("Enter a Number:"));
console.log(bill(tip));

function bill(tip) {
  if (tip > 30 && tip < 300)
  {
    ? console.log("Your tip is", tip * 0.15)
    : console.log("Your tip is ", tip * 0.2);
}
