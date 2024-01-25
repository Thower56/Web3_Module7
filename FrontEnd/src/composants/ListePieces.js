import React from "react";

export const ListePieces = ({pieces}) => {
    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {pieces.sort((a, b) => a.categorie.localeCompare(b.categorie)).map((piece) => (
                <div key={piece._id}>
                    <ul>
                        <li>{piece.titre}</li>
                        <li>{piece.artiste}</li>
                        <li>{piece.categorie}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}