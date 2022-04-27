// functional programming
// let a = 10,
//     b = 20;

// function f(par1, par2) {
//     return par1 + par2;
// }

// console.log( f(a, b) );

function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
    this.voice = "silent";

    this.getName = function() {
        return this.name;
    }

    this.getWeight = function() {
        return this.weight
    }

    this.setVoice = function(currVoice) {
        let len = currVoice.trim().length;
        if(typeof currVoice == "String" && len > 0){
            this.voice = currVoice;
        }
        throw "Incorrect animal name"
    }

    sound = () => console.log(this.voice);

    return {
        getSound: sound
    }
}

Animal.prototype.getVoice = function() {
    return this.voice;
}


let goGo = false;
while(!goGo) {
    try {
        let dog = new Animal("dog", 25);
        // let newName = prompt("Input name:");
        // dog.setVoice(newName);
        dog.getSound();
        goGo = true;
    } catch (error) {
        console.log("Errors catched!" + error.toString());
        goGo = true; // change to false
    }
}


// console.log( dog.getName() );
// console.log( dog.getVoice() );
// dog.setVoice("Gav");
// console.log( dog.getVoice() );

// split trim substring concat endsWith includes indexOf replace()
// search() slice() touppercase tolowercase 
