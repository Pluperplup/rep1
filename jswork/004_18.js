let s1 = [[7 , 2] , [9 , 0]];
let s2 = [[8 , 5] , [6 , 8]];

// s1[0][0] , s1[0][1] , s1[1][0] , s1[1][1]


let s3 = [[] , []];

function min_X (xl1 , xl2 , xr1 , xr2) {
    let arr = [];

    if(xl1 < xl2){
        arr[0] = xl1;
    } else {
        arr[0] = xl2;
    }

    if(xr1 < xr2){
        arr[1] =  xr1;
    } else {
        arr[1] =  xr2;
    }

    if(arr[0] > arr[1]){
        return s3[0][0] = arr[1];
    } else {
        return s3[0][0] = arr[0];
    }
}

function min_Y (yl1 , yl2 , yr1 , yr2) {
    let arr = [];

    if(yl1 < yl2){
        arr[0] = yl1;
    } else {
        arr[0] = yl2;
    }

    if(yr1 < yr2){
        arr[1] =  yr1;
    } else {
        arr[1] =  yr2;
    }

    if(arr[0] > arr[1]){
        return s3[0][1] = arr[1];
    } else {
        return s3[0][1] = arr[0];
    }
}

function max_X (xl1 , xl2 , xr1 , xr2) {
    let arr = [];

    if(xl1 < xl2){
        arr[0] = xl2;
    } else {
        arr[0] = xl1;
    }

    if(xr1 < xr2){
        arr[1] =  xr2;
    } else {
        arr[1] =  xr1;
    }

    if(arr[0] > arr[1]){
        return s3[1][0] = arr[0];
    } else {
        return s3[1][0] = arr[1];
    }
}

function max_Y (yl1 , yl2 , yr1 , yr2) {
    let arr = [];

    if(yl1 < yl2){
        arr[0] = yl2;
    } else {
        arr[0] = yl1;
    }

    if(yr1 < yr2){
        arr[1] =  yr2;
    } else {
        arr[1] =  yr1;
    }

    if(arr[0] > arr[1]){
        return s3[1][1] = arr[0];
    } else {
        return s3[1][1] = arr[1];
    }
}

min_X(s1[0][0] , s2[0][0] , s1[1][0] , s2[1][0]);
min_Y(s1[0][1] , s2[0][1] , s1[1][1] , s2[1][1]);
max_X(s1[0][0] , s2[0][0] , s1[1][0] , s2[1][0]);
max_Y(s1[0][1] , s2[0][1] , s1[1][1] , s2[1][1]);

console.log(s3[0][0] , s3[0][1]);
console.log(s3[1][0] , s3[1][1]);