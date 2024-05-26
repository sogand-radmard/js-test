
//practice-1
var star='';
star+='*';
star+='\n';
star+='*';
star+='*';
star+='\n';   // \n=new line
star+='*';
star+='*';
star+='*';
console.log(star);

console.log('--------------------------');
//practice-2
var str='';
for(i=1; i<=2; i++){
    for(j=1; j<=3; j++){
        str=str+'*';
    }
    str=str+'\n';
}
console.log(str);

console.log('--------------------------');
//practice-3
var star='';
for(var i=1; i<=5; i++){
    for(var j=1; j<=i; j++){
        star+='*';
    }
    star+='\n';
}
console.log(star);

console.log('--------------------------');
//practice-4
var star='';
for(var i=1; i<=5; i++){
    for(var j=5; j>=i; j--){
        star+='*';
    }
    star+='\n';
}
console.log(star);

console.log('--------------------------');
//practice-5
var star='';
for(var i=1; i<=5; i++){
    for(var j=5; j>i; j--){
        star+=' ';
    }
    for(var k=1; k<=i; k++){
        star+='*';
    }
    star+='\n';
}
console.log(star);

console.log('--------------------------');
//practice-6
var star='';
for(var i=1; i<=5; i++){
    for(var j=1; j<=i; j++){
        star+=' ';
    }
    for(var k=5; k>=i; k--){
        star+='*';
    }
    star+='\n';
}
console.log(star);