class Move {
    constructor(postions) {
        this.postions = postions;
    }
    TryMove(pieceIdentyfier, newPosition) {
        let valid = false;
        this.postions.GetAllPiecePositions().forEach(p => {
            if (p.identyfier == pieceIdentyfier && !valid) {
                if (this.ValidateMove(p, newPosition)) {
                    p.position = p.newPostion;
                    p.newPostion = newPosition;
                    console.log("Moved: ", p.identyfier, " from ", p.position, " to ", newPosition);
                    p.position = newPosition;
                    new Audio('sound/move.wav').play();
                    valid = true;
                }
                else {
                    this.RevertMove(p);
                    valid = false;
                }
            }
        });
        return valid;
    }
    MakePiecesDraggable() {
        $('img').draggable();
    }
    MakePiecesDroppable() {
        $('#board div').droppable({
            drop: function (ev, ui) {
                let piece = ui.draggable;
                let droppedOn = $(this);
                $(piece).detach().css({ top: 0, left: 0 }).appendTo(droppedOn);
                let valid = game.moves.TryMove(piece.get(0)["id"], droppedOn.get(0)["id"]);
                if (valid) {
                    new FEN().PrintFen();
                }
            }
        });
    }
    RevertMove(piece) {
        document.getElementById(piece.identyfier).remove();
        document.getElementById(piece.position).innerHTML = piece.GetPieceHtml(piece);
        console.log("Moved invalid! Move reverted.");
        this.MakePiecesDraggable();
    }
    ValidateMove(piece, newPosition) {
        if (!this.OccurpiedByOwnColor(piece, newPosition)) {
            return false;
        }
        if (this.OccurpiedByOtherColor(piece, newPosition)) {
            document.getElementById($('#' + newPosition).find('img').attr('id')).remove();
        }
        return true;
    }
    BlackMovedByPlayer(pieceIdentyfier) {
        let valid = false;
        if (pieceIdentyfier.indexOf('black') >= 0) {
            alert("You are player white.");
            valid = true;
        }
        return valid;
    }
    OccurpiedByOwnColor(piece, newPosition) {
        let valid = true;
        this.postions.GetAllPiecePositions().forEach(p => {
            if (p.color == piece.color && p.position == newPosition) {
                valid = false;
            }
        });
        return valid;
    }
    OccurpiedByOtherColor(piece, newPosition) {
        let valid = false;
        this.postions.GetAllPiecePositions().forEach(p => {
            if (p.color != piece.color && p.position == newPosition) {
                valid = true;
            }
        });
        return valid;
    }
    IsCheck(pieceIdentyfier) {
        let valid = false;
        if (pieceIdentyfier.indexOf('black') >= 0) {
            alert("You are player white.");
            valid = true;
        }
        return valid;
    }
}
