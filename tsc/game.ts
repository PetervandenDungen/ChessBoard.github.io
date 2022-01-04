/** Initialize board */
class Game {
    public moves: Move;
    public constructor() {
        this.moves = new Board(8, 8).moves;
        this.moves.MakePiecesDraggable();
        this.moves.MakePiecesDroppable();
    }
}

var game = new Game();

  
