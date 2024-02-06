import React from "react";
import { Piece } from "./Piece";

export const trieParCategorie = ({pieces, button}) => {

    const sansBoutton = () => {
        return (
        pieces.sort((a, b) => a.categorie.localeCompare(b.categorie)).map((piece) => (
            <div key={piece._id}>
                <ul Style={"list-style-type: none"}>
                    <li><Piece piece={piece}/></li>
                </ul>
            </div>)));
    }

    const avecBoutton = () => {
        return (
        pieces.sort((a, b) => a.categorie.localeCompare(b.categorie)).map((piece) => (
            <div key={piece._id}>
                <ul Style={"list-style-type: none"}>
                    <li><Piece piece={piece}/></li>
                    <button className="btn btn-primary" onClick={()=> button(piece._id)}>Ajouter</button>
                </ul>
            </div>)))
    }


    return(
     button ? avecBoutton() : sansBoutton()
    )
}