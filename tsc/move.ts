class Move {
    private postions: Position;
    public constructor(postions : Position) {
        this.postions = postions;
    }
    public TryMove(pieceIdentyfier: string, newPosition: string) : boolean{
        let valid = false;
        this.postions.GetAllPiecePositions().forEach(p => {
            if(p.identyfier == pieceIdentyfier && !valid){
                if(this.ValidateMove(p, newPosition)){
                    p.position = p.newPostion;
                    p.newPostion = newPosition;
                    console.log("Moved: ", p.identyfier, " from ", p.position ,  " to ", newPosition);
                    p.position = newPosition;
                    new Audio('sound/move.wav').play();
                    valid = true;
                } else {
                    this.RevertMove(p);
                    valid = false;
                }
            }
        });
        return valid;
    }
    public MakePiecesDraggable(){
        $('img').draggable();
    }
    public MakePiecesDroppable(){
        $('#board div').droppable({
            drop: function(ev, ui) {
                let piece = ui.draggable;
                let droppedOn = $(this);
                $(piece).detach().css({top: 0, left: 0}).appendTo(droppedOn);
                let valid = game.moves.TryMove(piece.get(0)["id"], droppedOn.get(0)["id"]);
                if(valid){
                    new FEN().PrintFen();
                }
            }
        }); 
    }
    private RevertMove(piece: Piece){
        document.getElementById(piece.identyfier).remove();
        document.getElementById(piece.position).innerHTML = piece.GetPieceHtml(piece);
        console.log("Moved invalid! Move reverted.");
        this.MakePiecesDraggable();
    }
    private ValidateMove(piece: Piece, newPosition: string) : boolean{
        /* Black is computer and cannot move */
        //if(this.BlackMovedByPlayer(piece.identyfier)){
        //    return false;
       // }
        if(!this.OccurpiedByOwnColor(piece, newPosition)){
            return false;
        }
        
        /* Move is totally valid, attack on piece is valid */
        if(this.OccurpiedByOtherColor(piece, newPosition)){

            document.getElementById($('#' + newPosition).find('img').attr('id')).remove();
        }

        return true;
    }
    private BlackMovedByPlayer(pieceIdentyfier: string) : boolean{
        let valid = false;
       
        if(pieceIdentyfier.indexOf('black') >= 0){
            alert("You are player white.");
            valid = true;
        }
        return valid;
    }
    private OccurpiedByOwnColor(piece: Piece, newPosition: string) : boolean{
        let valid = true;

        this.postions.GetAllPiecePositions().forEach(p => {
            if(p.color == piece.color && p.position == newPosition){
                valid = false;
            }
        });

        return valid;
    }
    private OccurpiedByOtherColor(piece: Piece, newPosition: string) : boolean{
        let valid = false;

        this.postions.GetAllPiecePositions().forEach(p => {
            if(p.color != piece.color && p.position == newPosition){
                valid = true;
            }
        });

        return valid;
    }
    private IsCheck(pieceIdentyfier: string) : boolean{
        let valid = false;
       
        if(pieceIdentyfier.indexOf('black') >= 0){
            alert("You are player white.");
            valid = true;
        }
        return valid;
    }
}