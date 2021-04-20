console.clear();
//...//


let a = Boolean(0);
console.log(!!a);  //false

let b = new Boolean(0);
console.log(!!b);  //true


 console.log(!!Boolean(0));  //false
 console.log(!!new Boolean(0));  //true


//...//
//Because the new Boolean(); always return 'true'
