import React from "react";
import {trieParArtiste} from "./trieParArtiste";
import {TrieParCategorie} from "./trieParCategorie";
import {TrieParTitre} from "./trieParTitre";


export const ListePieces = ({pieces, value, button}) => {

    const listeRecus = ({pieces}) => {
        if(value === "trieParArtiste") return (trieParArtiste({pieces, button}));
        else if(value === "trieParTitre") return (TrieParTitre({pieces, button}));
        else if(value === "trieParCategorie")return (TrieParCategorie({pieces, button}));
    }
    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {listeRecus({pieces})}
        </div>
    )
}