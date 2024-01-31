import React from "react";

export const Piece = ({ piece }) => {
    return (
        <>
            <p><b>Titre: </b> {piece.titre}</p>
            <p><b>Artiste: </b> {piece.artiste}</p>
            <p><b>Categorie: </b>{piece.categorie}</p>
        </>
    )
}