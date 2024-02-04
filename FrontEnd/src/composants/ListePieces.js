import React from "react";
import {trieParArtiste} from "./trieParArtiste";
import {trieParCategorie} from "./trieParCategorie";
import {trieParTitre} from "./trieParTitre";


export const ListePieces = ({pieces, value}) => {

    const listeRecus = ({pieces}) => {
        if(value === "trieParArtiste") return (trieParArtiste({pieces}));
        else if(value === "trieParTitre") return (trieParTitre({pieces}));
        else if(value === "trieParCategorie")return (trieParCategorie({pieces}));
    }
    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {listeRecus({pieces})}
        </div>
    )
}