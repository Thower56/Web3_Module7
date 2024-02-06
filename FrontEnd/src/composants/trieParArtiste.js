import React from "react";
import { Piece } from "./Piece";



export const trieParArtiste = ({pieces, button}) => {

    const avecBoutton = () => {
        return (
        pieces.sort((a, b) => a.artiste.localeCompare(b.artiste)).map((piece) => (
            <div key={piece._id}>
                <ul Style={"list-style-type: none"}>
                    <li><Piece piece={piece}/></li>
                    <button className="btn btn-primary" onClick={()=> button(piece._id)}>Ajouter</button>
                </ul>
            </div>)))
    }

    const sansBoutton = () => {
        return (
        pieces.sort((a, b) => a.artiste.localeCompare(b.artiste)).map((piece) => (
            <div key={piece._id}>
                <ul Style={"list-style-type: none"}>
                    <li><Piece piece={piece}/></li>
                </ul>
            </div>)));
    }

    return(
        button ? avecBoutton() : sansBoutton()
    )
}