// setTimeout  -- call one
// setInterval -- call many 
let count = 0;
let timerId;

function showMessage(name) {
    console.log(`Hi, ${name}, i am message!`);
    count++;
    if(count > 10) clearTimeout(timerId1);
}

// setTimeout(showMessage, 3000);
timerId1 = setInterval(showMessage, 1000, "Vasya");
setTimeout( (name) => console.log(`Hi, ${name}!`), 3000, "Gogi" );

console.log("End programm");
