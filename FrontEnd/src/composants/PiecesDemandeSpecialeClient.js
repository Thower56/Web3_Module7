import { Button } from "react-bootstrap";
import { Piece } from "./Piece";

export const PiecesDemandeSpecialeClient = ({Pieces, DeletePiece}) => {
    return(
        <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {Pieces.map((piece) => {
                return(
                    <div key={piece._id}>
                        <Piece piece={piece}/>
                        <Button onClick={() => DeletePiece(piece._id)} className="btn btn-danger" >X</Button>
                    </div>
                )
            })}
        </div>
        </>
    );
}