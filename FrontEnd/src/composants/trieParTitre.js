import React from "react";
import { Piece } from "./Piece";

export const trieParTitre = ({pieces}) => {
    return(
    pieces.sort((a, b) => a.titre.localeCompare(b.titre)).map((piece) => (
    <div key={piece._id}>
        <ul Style={"list-style-type: none"}>
            <li><Piece piece={piece}/></li>
        </ul>
    </div>)
))}