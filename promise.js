var sw;
sw = true;
var promise = new Promise(function (resolve, reject) {
    if (sw) {
        setTimeout(function () {
            resolve("seccess");
        }, 2000);
    }
    else {
        setTimeout(function () {
            reject("failed");
        }, 2000);
    }
});
promise.then(function (message) {
    console.log(message);
})["catch"](function (err) {
    console.log(err);
})["finally"](function () {
    console.log("finally flag");
});
// if(promise){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
