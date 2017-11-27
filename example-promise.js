// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Melbourne', function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('sucess', temp);
//     }

// });

// function getTempPromise (location) {
//     return new Promise(function (resolve, reject){
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Melbourne').then(function (temp){
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// })

function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            reject('a or b not a number');
        }
    });
}

addPromise(10, 10).then(function (addition) {
    console.log('The numbers added together are: ', addition)
}, function(err){
    console.log('error: ', err);
});

addPromise(10, 'a').then(function (addition) {
    console.log('The numbers added together are: ', addition)
}, function(err){
    console.log('error: ', err);
});

addPromise('a', 10).then(function (addition) {
    console.log('The numbers added together are: ', addition)
}, function(err){
    console.log('error: ', err);
});