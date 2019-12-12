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

  var arr = persons.map(function(item){
      var newArr=item.birthday.split('-')
      var date=new Date(newArr[2],newArr[1],newArr[0])
if (date.getMonth()>6)
return item
  })
  console.log(arr);