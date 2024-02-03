import React from "react";
import { Piece } from "./Piece";



export const trieParArtiste = ({pieces}) => {
    return(
    pieces.sort((a, b) => a.artiste.localeCompare(b.artiste)).map((piece) => (
    <div key={piece._id}>
        <ul Style={"list-style-type: none"}>
            <li><Piece piece={piece}/></li>
        </ul>
    </div>)
))}