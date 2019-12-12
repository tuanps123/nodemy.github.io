// var promise1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('3s');
//         resolve()
//     }, 2000);  
// })

// ////
// var promise2 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('2s');
//         resolve()
//     }, 2000);  
// })
// //
// var promise3 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('2giay');
//         data={code:400, message:'Loi'}
//         reject(data.message)
//     }, 2000);  
// })
// //
// Promise.all([promise1,promise2,promise3])
// .then(function(result){
//     console.log(result);
// })
// .catch(function(result){
//     console.log(result);
// })




//BT10:
var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(2)
    }, 3000);

})
    .then(function (data) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(data * 3)
            }, 3000);
        })
    })
    .then(function (data) {
        data > 10?console.log(true):console.log(false);
    })


//BT11:
// var p1 =new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(3)
//     }, 2000);
// })
// var p2 =new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(7)
//     }, 5000);
// })

// Promise.all([p1, p2]).then(function (result) {

//     console.log(result[0]+result[1]);
// })