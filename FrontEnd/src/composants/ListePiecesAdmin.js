import React from "react";
import { pieces } from '../composants/contenu-pieces-test';

export const ListePiecesAdmin = ({pieces}) => {

    const ModifierPiece = () => {
        
    };

    const EffacerPiece = () => {
       
    };

    return(
        <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {pieces.map((piece) => (
                <div key={piece._id}>
                    
                    <input className="form-control" placeholder={piece.titre}></input>
                    <input className="form-control" placeholder={piece.artiste}></input>
                    <p>{piece.categorie}</p>
                    <button className="btn btn-primary" onClick={() => ModifierPiece(piece._id)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => EffacerPiece(piece._id)}>Effacer</button>
                </div>
            ))}
        </div>
        </>
    )
}