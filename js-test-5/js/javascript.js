//sort()
//practice-1  string
var array1 =['sogand','panah','sahar','adryan','kamran','zahra'];
console.log(array1);

array1.sort();
console.log(array1);


console.log('-----------');
//practice-2  number
var array2=[100,25,35,120];
console.log(array2);

array2.sort();
console.log(array2);


console.log('-----------');
//reverse()
//practice-3
var array3=[1,'sogand',true,20];
console.log(array3);

array3.reverse();
console.log(array3);


console.log('-----------');
//indexOf
//practice-4
var array4=[1,'sogand',true,20,'sogand',true,30];
console.log(array4.indexOf('sogand'));


console.log('-----------');
//lastindexOf
//practice-5
var array4=[1,'sogand',true,20,'sogand',true,30];
console.log(array4.lastIndexOf('sogand'));


console.log('-----------');
//practice-6
var array5 =[10,14.5,16,18,9.75,17,15];
var max =0;

for(var i=0; i<array5.length; i++){
    if(array5[i]>max){
        max=array5[i];
    }
}
console.log(max);


console.log('-----------');
//practice-7
var array5 =[10,14.5,16,18,9.75,17,15];
var min=[i];

for(var i=1; i<array5.length; i++){
    if(array5[i]<min){
        min=array5[i];
    }
}
console.log(min);


console.log('-----------');
//nested array
//practice-8 
var array6=[1,['rad','mard'],'sogand',20];
console.log(array6);

console.log(array6[1]);
console.log(array6[1][0]);

console.log('-----------');
//nested array
//practice-9
var array6=[1,['rad',[22,[true]]],'sogand',20];
console.log(array6);

console.log(array6[1][1][1]);
