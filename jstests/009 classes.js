class User {
  _name = "";
  _email = "";
  _birthday = null;
  
  constructor(name, email, birthday) {
    this.setName(name);
    this.setEmail(email);
    this.setBirthday(birthday);
  }

  setName(new_name) {
    this._name = new_name.trim();
    if (this._name == "") {
      this._name = "Invalid user name";
    }
  }

  getName() {
    return this._name;
  }

  setEmail(new_email) {
    this._email = new_email.trim();
    if (this._email == "") {
      this._email = "Invalid user email";
    }
  }
  
  getEmail() {
    return this._email;
  }

  setBirthday(new_birthday) {
    this._birthday =  Date.parse(new_birthday);
    let t = typeof this._birthday;
    if ( isNaN(this._birthday) ) {
      this._birthday = null;
    } 
  }

  getBirthday() {
    return this._birthday.getDate();
  }
}

// let g = new User ("fsfs", "wadwa", "dawdd")