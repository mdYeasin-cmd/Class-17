// Result Calculator

document.write(`<h1>Result Calculator</h1>`);

const marks = 53;

if(marks >= 80 && marks <= 100){
    document.write(`Your result is A+`);
}
else if(marks >= 70 && marks <= 79){
    document.write(`Your result is A`);
}
else if(marks >= 60 && marks <= 69){
    document.write(`Your result is A-`);
}
else if(marks >= 50 && marks <= 59){
    document.write(`Your result is B`);
}
else if(marks >= 40 && marks <= 49){
    document.write(`Your result is C`);
}
else if(marks >= 33 && marks <= 39){
    document.write(`Your result is D`);
}
else if(marks >= 0 && marks <= 32){
    document.write(`Your result is F`);
}
else{
    document.write(`Your input marks is invalid`);
}

// Even Odd Number Print

document.write(`<h1>Even or Odd Number Print</h1>`);

const number = "56";

if(number % 2 === 0){
    document.write(`Even Number`);
}
else if(number % 2 ===1){
    document.write(`Odd Number`);
}
else{
    document.write(`Invalid input`);
}

// Print 100 to 1

document.write(`<h1>Print 100 to 1</h1>`);

for(let i = 100; i >= 1; i--){
    document.write(i + `<br>`);
}