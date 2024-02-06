import React from "react";
import { trieParArtiste } from "./trieParArtiste";
import { trieParCategorie } from "./trieParCategorie";
import { trieParTitre } from "./trieParTitre";

export const RepertoireDemandeSpecial = ({pieces, value, button}) => {
    const listeRecus = ({pieces}) => {
        if(value === "trieParArtiste") return (trieParArtiste({pieces, button}));
        else if(value === "trieParTitre") return (trieParTitre({pieces, button}));
        else if(value === "trieParCategorie")return (trieParCategorie({pieces, button}));
    }
    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {listeRecus({pieces})}
        </div>
    )
}