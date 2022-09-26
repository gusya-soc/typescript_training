let sw:boolean;

sw = true;

let promise =new Promise((resolve, reject) => {
    if (sw) {
        setTimeout(()=>{
            resolve("seccess");
        },2000);
    }
    else {
        setTimeout(()=>{
        reject("failed");
        },2000);
    }
});

promise.then((message) => {
    console.log(message);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("finally flag")
});

// if(promise){
//     console.log("true");
// }
// else{
//     console.log("false");
// }