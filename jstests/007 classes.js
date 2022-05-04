function User(name) {
  this._name = name;
  this.checkName();
}

User.prototype.checkName = function () {
  if (this._name.endsWith("er") == false) {
    return this._name.trim();
  }
  return "NOT";
};

User.prototype.getName = function () {
  return this._name;
};

let user = new User("User Name");
console.log(user.getName());

let a1 = confirm("Do you want to create new account?");
if (a1) {
  let name = prompt("Enter your name:");
  let b = new User(name);
  alert(`Your name is ${b.getName()}`);
}



class User {
  constructor(name, email) {
    this._name = name.trim();
    this.isValid = this.checkName();
  }

  checkName() {
    return this._name != "";
  }

  getName() {
    return this._name;
  }
}
