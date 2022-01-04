class Piece {
    public position: string;
    public newPostion: string;
    public color: string;
    public type: string;
    public identyfier: string;
    public constructor(position: string, newPostion: string, color: string, type: string, identyfier: string) {
        this.position = position;
        this.newPostion = position;
        this.color = color;
        this.type = type;
        this.identyfier = identyfier;
    }
    public GetPieceHtml(piece: Piece) : string{
        return '<img unselectable="on" id="'+piece.identyfier+'" class="invalid piece-'+ piece.color +'" src="img/pieces/'+ piece.type +'-'+ piece.color +'.png" >';
    }
}

