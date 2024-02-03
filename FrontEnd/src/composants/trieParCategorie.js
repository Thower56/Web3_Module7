import React from "react";
import { Piece } from "./Piece";

export const trieParCategorie = ({pieces}) => {
    return(
    pieces.sort((a, b) => a.categorie.localeCompare(b.categorie)).map((piece) => (
    <div key={piece._id}>
        <ul Style={"list-style-type: none"}>
            <li><Piece piece={piece}/></li>
        </ul>
    </div>
    )
))}