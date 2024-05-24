// if
//practice-1
var gender='female';

if(gender=='male'){
    console.log('boy');
}

if(gender=='female'){
    console.log('girl');
}

console.log('---------');
//practice-2
var age=22;
var gender='male';

if(age>18 && gender=='male'){
    console.log('welcome');
}

console.log('---------');
//practice-3
var age=20;
var gender='male';

if(age>18 || gender=='male'){
    console.log('welcome');
}

console.log('---------');
//practice-2
var grade=38;
if(grade>10){
    console.log(grade+">10");
}

if(grade>20){
    console.log(grade+">20");
}

if(grade>30){
    console.log(grade+">30");
}

if(grade>40){
    console.log(grade+">40");
}

if(grade>50){
    console.log(grade+">50");
}


// if else 
// practice-1
var num=20;
if(num%2==0){
    console.log('even');
}
else{
    console.log('odd');
}

console.log('---------');
//practice-2
var age = 12;
var gender="male";

if(age>18 && gender=="male"){
    console.log('valid');
}
else{
    console.log('invalid');
}


console.log('---------');
//practice-3
var age=20;

if(age>18){
    console.log("+18");
}
else{
    console.log("-18");
}

console.log('---------');
//practice-4
var num=-10;
if(num>0){
    console.log(num);
}
else{
    console.log(-num); //absolute value
}

console.log('---------');
//practice-5
var num=1110;
if(num%2==0){
    console.log('even');
}
else{
    console.log('odd')
}

console.log('---------');
//practice-6
var password= 1234;
if(password==1234){
    console.log('welcome');
}
else{
    console.log("your password is wrong");
}

console.log('---------');
//else if
//practice-1
var grade= 17;

if(grade<10){
    console.log('خیلی ضعیف');
}
else if(grade<13){
    console.log('ضعیف');
}
else if(grade<16){
    console.log('قابل قبول');
}
else{
    console.log('خیلی خوب');
}

console.log('---------');
//nested
//practice-2

var gender='female';
var age=9;

if(gender=='male'){
    if(age>18){
        console.log('+18 boy');
    }
    else{
        console.log('-18 boy');
    }
}
else{
    if(age>18){
        console.log('+18 girl');
    }
    else{
        console.log('-18 girl');
    }
}