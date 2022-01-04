class Position {
    constructor(pieces) {
        this.pieces = new Array();
        pieces.forEach(p => {
            this.pieces.push(p);
        });
    }
    GetAllPiecePositions() {
        return this.pieces;
    }
    RefreshAllPositions() {
        this.pieces = [];
        $('#board div').each(function () {
        });
    }
}
