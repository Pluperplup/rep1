class User {
  constructor(name , email) {
    this.setName(name);
    this.setEmail(email);
  }

  setName(new_name) {
    this._new_name = new_name.trim();
    if (this._new_name == "") {
      return (this._name = "Invalid user name");
    } else {
      return (this._name = this._new_name);
    }
  }

    setEmail(new_email){
      this._new_email = new_email.trim();
      if (this._new_email == "") {
        return (this._email = "Invalid user email");
      } else {
        return (this._email = this._new_email);
      }
    }

  getName() {
    return this._name;
  }

  getEmail() {
    return this._email;
  }
}
