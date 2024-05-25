// else if
var day=1;

if(day==1)
    console.log('شنبه');
else if(day==2)
    console.log('یکشنبه');
else if(day==3)
    console.log('دوشنبه');
else if(day==4)
    console.log('سه شنبه');
else if(day==5)
    console.log('چهارشنبه');
else if(day==6)
    console.log('پنج شنبه');
else if(day==7)
    console.log('جمعه');
else
console.log('نامعتبر');

console.log('-----------');
//switch case

var day=2;

switch(day){
            case 1:
            console.log('شنبه');
            break;
                case 2:
                console.log('یکشنبه');
                break;
                case 3:
                    console.log('دوشنبه');
                    break;
                    case 4:
                        console.log('سه شنبه');
                        break;
                        case 5:
                            console.log('چهارشنبه');
                            break;
                            case 6:
                                console.log('پنج شنبه');
                                break;
                                case 7:
                                    console.log('جمعه');
                                    break;
                                    default:
                                        console.log('نامعتبر');
}

console.log('-----------');
//loop
//while
//practice-1

var i=1;
while(i<=10){
    console.log('while');
    i++;
}

console.log('-----------');
//practice-2
var num=5;
while(num<10){
    console.log(num);
    num++;
}

console.log('-----------');
//practice-3 بخش پذیری بر 7
var num=10;
while(num<=50){
    if(num%7==0){
        console.log(num);
    }
    num++;
}


console.log('-----------');
//practice-4   بخش پذیری بر 7 و 4
var num=100;
while(num<=200){
    if(num%7==0 && num%4==0){
        console.log(num);
    }
    num++;
}

console.log('-----------');
//practice-5
var sum=0 , i=1;
console.log(i);
while(i<=50){
    sum+=i;
    i++;
}
console.log('مجموع:'+sum);
console.log(i);

console.log('-----------');
//do while
//practice-6
var i=6;
do{
    console.log('false');
    i++;
}
while(i>=7);

console.log('-----------');
//practice-7
var num=5;
while(num>=1){
    console.log(num);
    num--;
}

console.log('or');

var num=5;
do{
    console.log(num);
    i--;
}
while(num>=1);

console.log('-----------');
//for
//practice-8
for(var num=1; num<=5; num++){
    console.log(num);
}

console.log('or');
var num=1;
while(num<=5){
    console.log(num);
    num++;
}

console.log('or');
var num=1;
do{
    console.log(num);
    num++;
}
while(num<=5);

console.log('or');
for(var num=5; num>=1; num--){
    console.log(num)
}

console.log('or');
var num=5;
while(num>=1){
    console.log(num);
    num--;
}

console.log('or');
var num=5;
do{
    console.log(num);
    num--;
}
while(num>=1);

console.log('-----------');
//practice-9
var sum=0;
for(var num=10; num<=40; num++){
    sum+=num;
}
console.log('sum:'+ sum);

console.log('-----------');
//practice-10
var multi=1 , num;
for(num=2; num<=10; num++){
    multi*=num;
}
console.log('multi:'+multi);


console.log('-----------');
//practice-11 برنامه ای که اول بودن یا نبودن را تشخیص دهد
var counter=0 , num=6;
for(var i=1; i<=num; i++){
    if(num%i==0)
        counter++;
}
if(counter==2){
    console.log('aval');
}
else{
    console.log('morakab');
}


console.log('-----------');
//practice-12
var num=7;
while(num>=1){
    console.log(num);
    num--;
}

console.log('or');
var num=7;
do{
    console.log(num);
    num--;
}
while(num>=1);

console.log('or');
for(var num=7; num>=1; num--){
    console.log(num);
}

console.log('-----------');
//infinite loop or unlimited loop
//practice-13
