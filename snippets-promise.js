// Promise Example
// Example 1
var x = new Promise(function (resolve, reject) {})
var x = new Promise(function (resolve, reject) {
  resolve(2)
})

var x = new Promise(function (resolve, reject) {
  setTimeout(reject, 5000, 3)
})

console.log('hi')
x.then(function (value) {
  console.log(value + 2);

},function (reason) {
  console.log(reason);
  console.log('bye');
})
console.log('Async operation done.');


// Example 3
console.log('Going to execute promise')
var p = new Promise(function(resolve, reject){
  console.log('Inside Promise')
  setTimeout(function(){
    console.log('Going to Reject Promise')
    reject('3s crossed')
  })
  console.log('Still Inside Promise and not resolved yet')
})
p.then(function(res){
  console.log('Promise resolved with value', res)
})
.catch(function(e){
  console.log('Promise rejected with value', e)
})
console.log('Async code is executed')

// Promise All Success case
// The Promise.all(iterable) method returns a promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first passed promise that rejects.
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});

// Promise All reject case
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
  reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
});


// Promise race
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "one");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // Both resolve, but p2 is faster
});
