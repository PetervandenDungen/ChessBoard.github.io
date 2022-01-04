class FEN {
    public PrintFen() {
        let fen: string = "";
        let count = 0;
        [8, 7, 6, 5, 4, 3, 2, 1].forEach(y => {
            if (count > 0) {
                fen = fen + count;
            }
            fen = (fen !== "" ? fen + "/" : "");
            fen = fen.replace("//", "/8/");
            count = 0;
            ["A", "B", "C", "D", "E", "F", "G", "H"].forEach(x => {
                let piece = $("#" + x + y).find('img').attr('id');
                if (piece !== undefined) {
                    let type = piece.split("-")[0].charAt(0);
                    let color = piece.split("-")[1].charAt(0);
                    type = (color == "w" ? type.toUpperCase() : type);
                    if (count == 0) {
                        fen = fen + type;
                    } else {
                        fen = fen + count + type;
                    }
                    count = 0;
                } else {
                    count++;
                }
            });
        });

        console.log(fen);
        $('#fen input').val(fen);
    }
}