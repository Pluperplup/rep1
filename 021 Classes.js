// инкапсуляция
// наследование 
// полиморфизм

// приватные методы и поля
// Статические данные класса

class User {
    #sex = "";

    constructor(name, email, age) {
        this._name = name.trim();
        this._email = email.trim();
        this._age = Number(age);
    }

    set name(newName) {
        this._name = newName.trim();
    }

    get name() {
        return this._name;
    }

    set email(newEmail) {
        this._email = newEmail.trim();
    }

    get email() {
        return this._email;
    }

    getAge() {
        return this._age;
    }

    setAge(newAge) {
        this._age = Number(newAge);
    }
}

class Worker extends User {
    constructor(name, email, age, profession) {
        super(name, email, age);
        this._profession = profession;
    }

    set profession(newProfession) {
        this._profession = newProfession;
    }

    get profession() {
        return this._profession;
    }

    get name() {
        return super.name + " " + this.profession;
    }
}


let usr1 = new User("Gogi", "gogi@gmail.com", 34);
usr1._name = "!!!!!";
console.log(usr1.name);
let wrk1 = new Worker("Givi", "givi@gmail.com", 36, "Developer");

let users = [
    new User("Gogi1", "gogi1@gmail.com", 34),
    new User("Gogi2", "gogi2@gmail.com", 54),
    new Worker("Givi1", "givi1@gmail.com", 36, "Developer1"),
    new Worker("Givi2", "givi2@gmail.com", 36, "Developer2")
]

for (const key in users) {
    console.log(users[key].name);
}