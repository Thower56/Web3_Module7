import React from "react";
import { pieces } from '../composants/contenu-pieces-test';

export const ListePiecesAdmin = ({pieces}) => {

    const ModifierPiece = async ({id}) => {
        
    };

    const EffacerPiece = async ({id}) => {
        console.log(id);
        const requestOptions = {
            method: 'DELETE'
        };
        const reponse = await fetch(`/api/piece`);
        if(reponse.status === 200){
            const body = await reponse.json();
            console.log(body);
            id = body.filter(piece => piece._id === id )._id;
        }
       
        reponse = await fetch(`/api/pieces/${id}/supprimer`, requestOptions);
        if(reponse.status === 200){console.log("Supprimé avec succès!");}
        else{console.log("Erreur lors de la suppression.");}
    };
    

    return(
        <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {pieces.map((piece) => (
                <div key={piece._id}>
                    
                    <input className="form-control" placeholder={piece.titre}></input>
                    <input className="form-control" placeholder={piece.artiste}></input>
                    <input className="form-control" placeholder={piece.categorie}></input>
                    <button className="btn btn-primary" onClick={() => ModifierPiece(piece._id)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => EffacerPiece()}>Effacer</button>
                </div>
            ))}
        </div>
        </>
    )
}