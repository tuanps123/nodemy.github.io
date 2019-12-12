var person={
    name:'duong',
    name1:'duong',
}
var person2= Object.assign({},person);

var person3=Object.assign({}, person,{name:'nam'}, {name1:'an'});
// console.log(person3);



function creatAddStartWith(startNumber){
    return function(step){
        startNumber += step;
        return startNumber;
    }
}

var add = creatAddStartWith(8);

add(3);
add(2);	
add(1);
var result = add(0);
console.log(add(3));