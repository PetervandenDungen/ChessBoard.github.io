class Piece {
    constructor(position, newPostion, color, type, identyfier) {
        this.position = position;
        this.newPostion = position;
        this.color = color;
        this.type = type;
        this.identyfier = identyfier;
    }
    GetPieceHtml(piece) {
        return '<img unselectable="on" id="' + piece.identyfier + '" class="invalid piece-' + piece.color + '" src="img/pieces/' + piece.type + '-' + piece.color + '.png" >';
    }
}
