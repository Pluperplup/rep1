let pawn = [0 , 0];

class Pawn {
    constructor (x , y){
        this.X = x;
        this.Y = y;
    }

    Move (x , y){
        let expression = (((pawn[0] == x - 1) || (pawn[0] == x )) && (pawn[1] == y)) ? true : false;
        if(expression){
            return pawn[0] = this.X;
        } else {
            console.log("you can't move that way")
        }
    }
}

let pawn1 = new Pawn(0 , 0);
pawn1.Move()
