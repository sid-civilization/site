class Game {
    constructor(id, name, owner) {
        this.id = id;
        this.name = name;
        this.owner = owner;
    }

    static fromJson(json) {
        return Object.assign(new Game(), json)
    }
}

export default Game;