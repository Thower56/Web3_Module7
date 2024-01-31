import React from "react";
import { Piece } from "./Piece";

export const ListePieces = ({pieces}) => {
    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {pieces.sort((a, b) => a.categorie.localeCompare(b.categorie)).map((piece) => (
                <div key={piece._id}>
                    <ul Style={"list-style-type: none"}>
                        <li><Piece piece={piece}/></li>
                    </ul>
                </div>
            ))}
        </div>
    )
}