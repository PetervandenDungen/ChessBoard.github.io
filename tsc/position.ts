class Position {
    private pieces: Piece[];
    public constructor(pieces : Piece[]) {
        this.pieces = new Array();
        pieces.forEach(p => {
            this.pieces.push(p);
           });
    }
    public GetAllPiecePositions() : Piece[]{
        return this.pieces;
    }
    public RefreshAllPositions(){
            this.pieces = [];
            $('#board div').each(function(){

            });   
    }
}
