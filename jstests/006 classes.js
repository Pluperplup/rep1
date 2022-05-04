let a1 = confirm("Do you want to create new account ?");
let c = true;

if (c == a) {
  let b = new User(prompt("Enter your name :"));
  alert(`Your name is ${b.getName()}`);
  alert(`Your email is ${b.getEmail()}`);
  alert(`Your birthday is ${b.getBirthday()}`);
}

function User(name, email, birthday) {
  let _name, _email, _birthday

  setName = (newName) => {
    newName = newName.trim();
    if (newName != "") _name = newName;
    throw "Invalid user name";
  };

  setEmail = (newEmail) => {
    newEmail = newEmail.trim();
    if (newEmail.length > 5) _email = newEmail
    throw "Invalid email";
  };

  setBirthday = () => {
    birthday = birthday.trim();
    if (birthday != "") {
      return (birthday = birthday.split("."));
    }
    throw "Invalid data";
  };

  return {
    setName,
    setEmail,
    setBirthday
  };
}

let a2 = confirm("Do you want to continue registration ?");
if (a2 == true) {
  email = prompt("Enter your email :", "@gmail.com");
}


let user = new User("user name");
user.setName("New name");

// let a = confirm("Do you want to create new account ?");
// let c = true;

// if (c == a) {
//   let b = new User(prompt("Enter your name :"));
//   alert(`Your name is ${b.getName()}`);
// }

// function User(name) {
//   setName = () => {
//     name = name.trim();
//     if (name != "" && name.endsWith("er") == false) {
//       return (this._name = name);
//     } else {
//       return alert("Invalid data");
//     }
//   };
// }
// User.prototype.setName = function (name) {
//   name = name.trim();
//   if (name != "" && name.endsWith("er") == false) {
//     return (this._name = name);
//   } else {
//     return alert("Invalid data");
//   }
// };

// User.prototype.getName = function () {
//   return this._name;
// };
// this._name = name.trim() || "BadName";

// Name = () => {
//   name = name.trim();
//   if (name != "" && name.endsWith("er") == false) {
//     return (this._name = name);
//   } else {
//     return alert("Invalid data");
//   }
// };
// return {
//   setName: Name,
// };
