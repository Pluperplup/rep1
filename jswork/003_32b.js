let x , y;

if (x == undefined){
    x = Infinity;
}
if (y == undefined){
    y = Infinity;
}


if(y < 1.5 && y >= -2){
    console.log(`точка А (${x}; ${y}) принадлежит графику`);
} else {
    console.log(`точка А (${x}; ${y}) не принадлежит графику`);
}