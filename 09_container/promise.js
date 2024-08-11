// declaring a promise
const promise1 = new promise(function(resolve, reject){
    //Do an async task
    // Db calls, cryptography , network
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
},1000)
})
// function consumption
// .then ka sidha relation hai resolve k saath
promise1.then(function(){
    console.log("promise consumed");
})

// declaring a promise without holding in variable

new promise(function(resolve,reject){
    setTimeout(() =>{
console.log("Async task 2");
resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promise3 = new promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"ananya", email: "ananya@gmail.com"})
    },1000)

    promise3.then(function(user){
        console.log(user);
    })
})