//BT1
var ages = [32, 33, 12, 40, 1, 1.2];
var chan = ages.filter(function (item) {
  return item % 2 == 0;
})
//console.log(chan);
//BT2
var persons = [
  {
    name: "tien",
    birthday: "30-04-1998"
  },
  {
    name: "tuan anh",
    birthday: "01-05-1994"
  },
  {
    name: "trung",
    birthday: "02-09-1997"
  },
  {
    name: "doan",
    birthday: "23-08-1998"
  }
];

//c1
var newArr = persons.filter(function (item) {
  var arrDate = item.birthday.split('-')
  return parseInt(arrDate[1]) > 6
})
//console.log(newArr);


//c2
var newArrPersons = persons.map(function (item) {
  var mangDate = item.birthday.split('-')
  var date = new Date(mangDate[2] + '-' + mangDate[1] + '-' + mangDate[0])
  item.birthday = date
  return item
})
//console.log(newArrPersons)
var newMonthArr = newArrPersons.filter(function (item) {
  return item.birthday.getMonth() > 5
})
//console.log(newMonthArr);

//BT3:
var filterByOld = newArrPersons.filter(function (item) {
  var timeNow = new Date()
  //console.log(Date.now());
  return timeNow.getYear() - item.birthday.getYear() >= 22
})
// console.log(filterByOld);



//BT4:
var sortByOld = newArrPersons.sort(function (a, b) {
  return a.birthday.getYear() - b.birthday.getYear()
})
//console.log(sortByOld);

//BT5:
var sortByName = newArrPersons.sort(function (a, b) {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
})
//console.log(sortByName);

//BT6:
var getName = newArrPersons.map(function (item) {
  item.name = item.name.toUpperCase()
  return item
})
//console.log(getName)

//VD:
var arr = getName.forEach(function (item) {
  item.name = item.name.toLowerCase()
  //console.log(item);
  return item
})
//console.log(arr);



//BT7:
var doan = {
  name: 'Doan',
  age: 22,
  salary: 10000
}
var trung = Object.assign({}, doan, { name: 'Trung' }, { clone: true })
// console.log(trung);
// console.log(doan);


//BT1:
function creatAddStartWith(startNumber) {
  return function (step) {
    startNumber += step;
    return startNumber;
  }
}

var add = creatAddStartWith(8);

add(3);
add(2);
add(1);
var result = add(0);
//console.log(result);
// console.log(creatAddStartWith(8)(3));









//B3:
function capitalName() {
  this.name = this.name.toUpperCase();
}

var person1 = {
  name: 'nam', birthDay: '1996-11-26'
}
var person2 = {
  name: 'hiep', birthDay: '1999-01-26'
}
capitalName.call(person1);
// console.log(person1);



//BT3
function formatBirthday() {
  var arr = this.birthDay.split('-')
  var date = arr[2] + '-' + arr[1] + '-' + arr[0]
  this.birthDay = date
  return this
}
formatBirthday.call(person1)
//console.log(person1);
formatBirthday.call(person2)
//console.log(person2);


//BT4:
var arrNumber = [4, 8, 9, 3, 4, 7, 2, -1, 8]
function minNumber() {
  var newArrNumber = Object.assign([], this)
  //console.log(newArrNumber);
  newArrNumber.sort(function (a, b) {
    return a - b
  })
  //console.log(newArrNumber)
  var minNumber = newArrNumber[0]
  //console.log(minNumber)
}
minNumber.call(arrNumber)


var sum = -1;
for (var i = 0; i < 100; i++) {
  var sum = i * 100
}
//console.log(i);
//console.log(sum);






//BT4:
var arr = [4, 8, 9, 3, 4, 7, 2, -1, 8]
var min = Math.min.apply(null, arr)
//console.log(min);

//BT3:
var person1 = {
  name: 'nam', birthDay: '1996-11-26'
}
var person2 = {
  name: 'hiep', birthDay: '1999-01-26'
}

function newObj() {
  var newArr = this.birthDay.split('-')
  this.birthDay = newArr[2] + '-' + newArr[1] + '-' + newArr[0]
}

newObj.call(person1)
// console.log(person1);

// newObj.bind(person2)
// console.log(newObj);

// console.log(person2);





function fn(a,callback){
  console.log(a-1);
  callback(a)
}
function run (a) {
  console.log(a);
  // body
}
fn(4,run)