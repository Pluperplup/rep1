let obj = {
    name: "Gogi",
    age: 17,
    sex: "male",
    10: "key val",
    address: {
        street: "Voli",
        build: 23,
        ap: 14
    }
}

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj[10]);

// obj.toString();
// let objKeys = Object.keys(obj);
// console.log(objKeys);
// let objVal = Object.values(obj);
// console.log(objVal);

// let objKey = Object.keys(obj);
// for(let i = 0; i < objKey.length; i++) {
//     console.log(obj[objKey[i]]);
// }

// number, string, boolean; 
// let var1 = 10;
// let var2 = var1;
// var1 = 44;
// console.log(var1, var2);

let newObj = obj;
console.log(newObj);
obj.name = "Givi";
console.log(newObj);

// newObj = Object.assign({}, obj); // For simple objects
newObj = JSON.parse(JSON.stringify(obj));
obj.name = "Ara";
obj.address.ap = 90;
console.log(newObj.address);





let user = {
    name : "Tim",
      local : {
        id : 24324
      }
  }
  
  for( let key in user.local){
    console.log(user.local[key])
  }
  
  let clone = Object.assign({} , user , user.local)
  
  for(t in clone){
    if(typeof(clone[t]) == "object"){
      continue
    } else {
      console.log(t);
      console.log(clone[t]);
    }
  }