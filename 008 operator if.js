let weight =90;
let voltage = 110;

// if(weight >= 100) {
//     console.log("Масса больше или равна 100 кг.");
//     console.log("Надо меньше жрать.");
// }


if(weight > 100 && voltage >= 220) {
    console.log("Big european fridge");
} else if(weight > 100 && voltage <= 110) {
    console.log("Big am fridge");
} else {
    console.log("WTF");
}

