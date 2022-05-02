let a1 = confirm("Do you want to create new account ?");
let c = true;

if (c == a) {
  let b = new User(prompt("Enter your name :"));
  alert(`Your name is ${b.getName()}`);
  alert(`Your email is ${b.getEmail()}`);
}

function User(name, email, birthday) {
  setName = () => {
    if (name.trim() != "" && name.endsWith("er") == false) {
      return (name = name.trim());
    }
    throw "Invalid data";
  };

  let a2 = confirm("Do you want to continue registration ?");
  if (a2 == true) {
    email = prompt("Enter your email :");
  }

  setEmail = () => {
    if (email.trim() != "" && email.endsWith("@gmail.com") == true) {
      return (email = email.trim());
    }
    throw "Invalid data";
  };

  return {
    getName: setName,
    getEmail : setEmail,
  };
}

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
