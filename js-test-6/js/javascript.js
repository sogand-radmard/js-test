//function declaration
//practice-1

function showBio(){
    console.log('first name = sogand');
    console.log('last name = rad');
    console.log('age = 26');
}

showBio();


console.log('------------');
//function expression
//practice-2
var showBio= function(){
    console.log('first name = sogand');
    console.log('last name = rad');
    console.log('age = 26');
}

showBio();

//practice-3
//Take two numbers and print the sum in the output
//function declaration
function addNumbers(num1 , num2){
    return num1 +num2;
}

var x= addNumbers(5,10);
console.log(x);

console.log('------------');
//function expression
var addNum = function(num1, num2, num3){
    console.log(num1+num2+num3);
}

addNum(4,8,2);
addNum(10,20,5);


console.log('------------');
//practice-4
var num1=10;
var num2=14;
var num3=12;
var num4=17;
var num5=16;

var total=num1+num2+num3+num4+num5;
var av=total/5;

if(av>=12){
    console.log('قبول')
}
else{
    console.log('مشروط');
}

console.log('------------');
//function
function average(num1,num2,num3,num4,num5){

    var total=num1+num2+num3+num4+num5;
    var av=total/5;

    if(av>=12){
        return('قبول')
    }
    else{
        return('مشروط');
    }
}
console.log(average(12,10,5,9,20));
console.log(average(11,10,15,19,0));


console.log('------------');
//practice-5
function sum(num1,num2,num3){
    return num1+num2+num3;
}
console.log(sum(1,2,3));
console.log(sum(1,2));   //NaN
console.log(sum(1,2,3,4));

console.log('------------');
//practice-6 unlimit output
function sum(){
    var total=0;
    for(var i=0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}

console.log(sum());
console.log(sum(7,8,5,40,40));


console.log('------------');
//practice-7
function myFunction(){
    console.log(arguments);
}

myFunction(5,2,3);

console.log('------------');
//rest ... is an array
function myFunction(...numbers){
    console.log(numbers);
}

myFunction(5);

console.log('------------');
//rest
function sum(...numbers){
    var total=0;
    for(var i=0; i<numbers.length; i++){
        total+=numbers[i];
    }
    return total;
}

console.log(sum(5,6,1,10,55));

console.log('------------');
//practice-8
function multi(...num){
    var total=1;
    for(i=0; i<num.length; i++){
        total*=num[i];
    }
    return total;
}
console.log("multi:  "+multi(2,2));
console.log("multi:  "+multi(2,2,2,2));

console.log('------------');
//defualt parameters
//practice-9 
function sum(num1,num2,num3=0){
    return num1+num2+num3;
}

console.log("return : "+ sum(10,4));
console.log("return : "+ sum(10,4,1));


console.log('------------');
//power  (base,exponent)
//practice-10

var result=1;
for(var i=1; i<=3; i++){
    result*= 2;
}
console.log('result : ' + result);


console.log('------------');

function power(base,exponent){
    var result=1;
    for(var i=1; i<=exponent; i++){
        result*=base;
    }
    return result;
}
console.log('result : ' + power(2,0));
console.log('result : ' + power(2,4));
console.log('result : ' + power(10,2));

console.log('------------');
//practice-10 aval morakab
var count=0 ;
number=11;
for(var i=1; i<=number; i++){
    if(number%2==0){
        count++;
    }
}
if(count==2){
    console.log('aval');
}
else{
    console.log('morakab');
}


console.log('------------');

function isPrime(number){
    var count=0;
    for(var i=1; i<=number; i++){
        if(number%i==0)
            count++;
        
    }

    if(count==2)
        return true;
    
    else
        return false;
    
}
console.log(isPrime(10));
console.log(isPrime(11));

console.log('------------');

function isPrime(number){
    for(var i=2; i<number; i++){
        if(number%i==0)
            return false;
    }
    return true;
}

console.log(isPrime(22));
console.log(isPrime(5));

console.log('------------');
//practice-11
function isPrime(number){
    for(var i=2; i<number; i++){
        if(number%i==0)
            return false;
    }
    return true;
}



function rangePrime(firstNum, lastNum){
    var result=[];
    for(var i=firstNum; i<=lastNum; i++){
        if(isPrime(i)==true)
            result.push(i);
    }
    return result;
}

console.log(rangePrime(12,20));
console.log(rangePrime(50,100));


console.log('------------');
//arrow
//practice-11
// function expression
var add =function(a,b){
    return a+b;
}

console.log('------------');
//arrow
var add=(a,b) => a+b;
console.log(add(5,10));


console.log('------------');
//practice-12
var power= function (num){
    return num*num;
}

//arrow
var power =(num) => num*num;
console.log(power(12));

console.log('------------');
//callback function
//practice-13
function firstFunction(callback){
    console.log('first function');
    callback();
}
firstFunction(secendFunction);

function secendFunction(){
    console.log('secend function');
}