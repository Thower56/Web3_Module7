import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const ListeDemandeSpecialeClient = ({Pieces, retirerPiece}) => {
    console.log("Pieces: " + Pieces);
    return(
        <>
        <div>
            {Pieces && Pieces.map((piece) => {
                <div key={piece._id}>
                    <h2>{piece.Titre}</h2>
                    <p>{piece.Artiste}</p>
                    <p>{piece.Categorie}</p>
                    <Button onClick={retirerPiece} variant="outlined" >X</Button>
                </div>
        })}
        </div>
        </>
    );
}