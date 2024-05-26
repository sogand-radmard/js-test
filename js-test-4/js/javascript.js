//array
var a=[1,"google",3 ,true];
console.log(a);
console.log(typeof a);
console.log(a.length);

a.length=5;
console.log(a);

console.log('---------');

var b=[];
console.log(b);

b[0]=10;
b[1]=20;
b[2]='google';
console.log(b);

console.log('---------');

var c=[];
c[3]='welcome';
c[0]=50;
console.log(c);

console.log('---------');

var a=[1,"google",3];
var b=[1,"google",3];
console.log(a==b);

console.log('---------');

var a=[1,"google",3];
var b=[1,"google",3];
console.log(a[0]==b[0]);

console.log('---------');
//practice-1
//average
var grade1=14.5;
var grade2=18;
var grade3=17;
var grade4=16.5;
var grade5=20;
var sum=grade1+grade2+grade3+grade4+grade5;
var average= sum/5;
console.log("average:"+average);

//array
var grade=[14.5,18,17,16.5,20];
var sum=grade[0]+grade[1]+grade[2]+grade[3]+grade[4];
var average= sum/grade.length;
console.log('average:'+average);


console.log('or');

var grade=[14.5,18,17,16.5,20];
var sum=0;
for(var i=0; i<grade.length; i++){
     sum+=grade[i];
}
//i<=grade.lenght - 1
// console.log(sum);
var average= sum/grade.length;
console.log('average:'+average);


console.log('---------');
//practice-2
var num=[2,55,14,20,9];
for(i=0; i<=4 ; i++){
    if(num[i]%2==0){
        console.log(num[i]);
    }
}


console.log('---------');
//toString
var array1=[1,true,'google',13.4];
console.log(array1);

var x = array1.toString();
console.log(x);
console.log(array1.toString()); 
//join
console.log(array1.join(' * '));

console.log('---------');
//pop last element
var array1=[1,true,'google',13.4];
array1.pop();
console.log(array1);

var a = array1.pop();
console.log(a);


console.log('---------');
//push last element
var array1=[1,true,'google',13.4];
array1.push(200);
console.log(array1);

var a =array1.push();
console.log('lenght:'+a);

console.log('---------');
//shifting  first element
var array1=[1,true,'google',20];
// array1.shift();
console.log(array1);

var a= array1.shift();
console.log(a);

console.log('---------');
//unshifting  first element
var array1=[1,true,'google',20];
var x= array1.unshift('www');
console.log(array1);
console.log(x);