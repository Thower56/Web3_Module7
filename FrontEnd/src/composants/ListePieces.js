import React from "react";

export const ListePieces = ({pieces}) => {
    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {pieces.sort((a, b) => a.categorie.localeCompare(b.categorie)).map((piece) => (
                <div key={piece._id}>
                    <ul Style={"list-style-type: none"}>
                        <li><b>Titre: </b>{piece.titre}</li>
                        <li><b>Artiste: </b>{piece.artiste}</li>
                        <li><b>Categorie: </b>{piece.categorie}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}