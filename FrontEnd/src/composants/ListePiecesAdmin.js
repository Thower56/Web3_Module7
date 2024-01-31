import {React, useState} from "react";
import { pieces } from '../composants/contenu-pieces-test';

export const ListePiecesAdmin = ({pieces}) => {
    const [piecesModifier, setPieces] = useState();
    const [titre, setTitre] = useState("");
    const [artiste, setArtiste] = useState("");
    const [categorie, setCategorie] = useState("");

    const ModifierPiece = async () => {
        
        console.log("Editing piece:", piecesModifier);
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(piecesModifier)
            
        };
        console.log(requestOptions);
        const response = await fetch(`/api/pieces/${piecesModifier._id}/modifier`, requestOptions);
        console.log(response);
        if (response.status === 200) {
            console.log("Piece modifier!");
        } else {
            console.log("Erreur lors de la modification.");
        }
        
        window.location.reload();
    };

    const EffacerPiece = async (_id) => {
        console.log(_id);
        const requestOptions = {
            method: 'DELETE'
        };
        let reponse = await fetch(`/api/piece`);
        if(reponse.status === 200){
            const body = await reponse.json();
            console.log(body);
            _id = body.filter(piece => piece._id === _id )._id;
        }
       
        reponse = await fetch(`/api/pieces/${_id}/supprimer`, requestOptions);
        if(reponse.status === 200){console.log("Supprimé avec succès!");}
        else{console.log("Erreur lors de la suppression.");}
        window.location.reload();
    };

    const Modifier = (_id) => {
        let piece = {};
        piece.categorie = categorie || document.getElementById("categorie")?.placeholder;
        piece.artiste = artiste || document.getElementById("artiste")?.placeholder;
        piece.titre = titre || document.getElementById("titre")?.placeholder;
        piece._id = _id;
        setPieces(piece);
        console.log("Nouvelle piece: " + piece);
    };
    

    return(
        <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {pieces.map((piece) => (
                <div key={piece._id}>
                    <input id="titre" onChange={(event) => setTitre(event.target.value)} className="form-control" placeholder={piece.titre}></input>
                    <input id="artiste" onChange={(event) => setArtiste(event.target.value)} className="form-control" placeholder={piece.artiste}></input>
                    <input id="categorie" onChange={(event) => setCategorie(event.target.value)} className="form-control" placeholder={piece.categorie}></input>
                    <button className="btn btn-primary" onClick={() =>{Modifier(piece?._id) ; ModifierPiece()}}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => EffacerPiece(piece?._id)}>Effacer</button>
                </div>
            ))}
        </div>
        </>
    )
}