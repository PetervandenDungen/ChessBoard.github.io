class Board {
    constructor(rows, squares) {
        this.rows = rows;
        this.squares = squares;
        document.getElementById('board').innerHTML = this.renderBoard();
        this.StartPostition();
    }
    getCoordinate(index, squareInRow) {
        let xCoordinate;
        (function (xCoordinate) {
            xCoordinate[xCoordinate["A"] = 1] = "A";
            xCoordinate[xCoordinate["B"] = 2] = "B";
            xCoordinate[xCoordinate["C"] = 3] = "C";
            xCoordinate[xCoordinate["D"] = 4] = "D";
            xCoordinate[xCoordinate["E"] = 5] = "E";
            xCoordinate[xCoordinate["F"] = 6] = "F";
            xCoordinate[xCoordinate["G"] = 7] = "G";
            xCoordinate[xCoordinate["H"] = 8] = "H";
        })(xCoordinate || (xCoordinate = {}));
        ;
        return xCoordinate[(Math.floor(squareInRow))] + Math.ceil((this.rows * this.squares - index) / 8);
    }
    renderBoard() {
        let html = '';
        let squareInRow = 1;
        for (let i = 0; i < (this.rows * this.squares); i++) {
            let color;
            if (Math.floor((i / 8) % 2)) {
                color = (i % 2 ? "white" : "black");
            }
            else {
                color = ((i % 2) ? "black" : "white");
            }
            html += '<div id="' + this.getCoordinate(i, squareInRow++) + '" class="color-' + color + ' square-' + Number(i + 1) + '"></div>';
            if (squareInRow == 9) {
                squareInRow = 1;
            }
        }
        return html;
    }
    StartPostition() {
        this.pieces = [
            new Piece("A2", "A2", "white", "pawn", "p-white-1"),
            new Piece("B2", "B2", "white", "pawn", "p-white-2"),
            new Piece("C2", "C2", "white", "pawn", "p-white-3"),
            new Piece("D2", "D2", "white", "pawn", "p-white-4"),
            new Piece("E2", "E2", "white", "pawn", "p-white-5"),
            new Piece("F2", "F2", "white", "pawn", "p-white-6"),
            new Piece("G2", "G2", "white", "pawn", "p-white-7"),
            new Piece("H2", "H2", "white", "pawn", "p-white-8"),
            new Piece("A7", "A7", "black", "pawn", "p-black-1"),
            new Piece("B7", "B7", "black", "pawn", "p-black-2"),
            new Piece("C7", "C7", "black", "pawn", "p-black-3"),
            new Piece("D7", "D7", "black", "pawn", "p-black-4"),
            new Piece("E7", "E7", "black", "pawn", "p-black-5"),
            new Piece("F7", "F7", "black", "pawn", "p-black-6"),
            new Piece("G7", "G7", "black", "pawn", "p-black-7"),
            new Piece("H7", "H7", "black", "pawn", "p-black-8"),
            new Piece("A1", "A1", "white", "rook", "r-white-1"),
            new Piece("H1", "H1", "white", "rook", "r-white-2"),
            new Piece("A8", "A8", "black", "rook", "r-black-1"),
            new Piece("H8", "H8", "black", "rook", "r-black-2"),
            new Piece("B1", "B1", "white", "bishop", "b-white-1"),
            new Piece("G1", "G1", "white", "bishop", "b-white-2"),
            new Piece("B8", "B8", "black", "bishop", "b-black-1"),
            new Piece("G8", "G8", "black", "bishop", "b-black-2"),
            new Piece("C1", "C1", "white", "knight", "n-white-1"),
            new Piece("F1", "F1", "white", "knight", "n-white-2"), ,
            new Piece("C8", "C8", "black", "knight", "n-black-1"),
            new Piece("F8", "F8", "black", "knight", "n-black-2"),
            new Piece("D1", "D1", "white", "queen", "q-white"),
            new Piece("D8", "D8", "black", "queen", "q-black"),
            new Piece("E1", "E1", "white", "king", "k-white"),
            new Piece("E8", "E8", "black", "king", "k-black"),
        ];
        this.pieces.forEach(p => {
            document.getElementById(p.position).innerHTML = p.GetPieceHtml(p);
        });
        let positions = new Position(this.pieces);
        this.moves = new Move(positions);
    }
}
