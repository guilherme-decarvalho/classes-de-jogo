class heroi{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        if (this.type === "mago"){
            this.attack = "magia"
        }
        else if (this.type === "guerreiro"){
            this.attack = "espada"
        }
        else if (this.type === "monge"){
            this.attack = "artes marciais"
        }
        else if (this.type === "ninja"){
            this.attack = "shuriken"
        }
        else{
            console.log("Heroi inexistente!")
        }
        console.log(`O ${this.type} atacou usando ${this.attack}.`)
    }
}

let mago = new heroi("Presto", 15, "mago")
mago.attack()

let guerreiro = new heroi("Bobby", 8, "guerreiro")
guerreiro.attack()

let monge = new heroi("Buda", 2587, "monge")
monge.attack()

let ninja = new heroi("Naruto", 33, "ninja")
ninja.attack()