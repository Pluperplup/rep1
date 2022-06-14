class User {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName.trim();
    }

    getEmail() {
        return this._email;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    setEmail(email) {
        this._email = email;
    }
}

let usr = new User("UName", "u@mail.com");
console.log("Name is", usr._name);
console.log("Name is", usr.getName());

console.log("Name is", usr.name);
usr.name = "    New name   ";//set
console.log("Name is", usr.name);//get
