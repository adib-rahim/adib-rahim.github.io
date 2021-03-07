let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random()*100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value ;
    if (input == number){
        output.innerHTML= "You got the number! Nice job"
    }
    else if (input <number){
        output.innerHTML= "Guess is too low"
    };

     if (input > number){
        output.innerHTML="Guess is too high"
    }

});