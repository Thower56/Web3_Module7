import {React, useState, Navigate} from "react";
import { useParams } from "react-router-dom";
import { Piece } from "../composants/Piece";

export const PageModifier = ({piece}) => {
    const [piecesModifier, setPieces] = useState();
    const [titre, setTitre] = useState("");
    const [artiste, setArtiste] = useState("");
    const [categorie, setCategorie] = useState("");
    const [rediriger, setRediriger] = useState(false);

    const { id } = useParams();

    const ModifierPiece = async () => {
        
        console.log("Editing piece:", piecesModifier);
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(piecesModifier)
            
        };
        console.log(requestOptions);
        const response = await fetch(`/api/pieces/${id}/modifier`, requestOptions);
        console.log(response);
        if (response.status === 200) {
            console.log("Piece modifier!");
        } else {
            console.log("Erreur lors de la modification.");
        }
        
        window.location.reload();
    };

    const Modifier = () => {
        let piece = {};
        piece.categorie = categorie || document.getElementById("categorie")?.placeholder;
        piece.artiste = artiste || document.getElementById("artiste")?.placeholder;
        piece.titre = titre || document.getElementById("titre")?.placeholder;
        setPieces(piece);
        console.log("Nouvelle piece: " + piece);
        ModifierPiece();
    };

    const Annuler = () => {
        setRediriger(true);
    };

    return(
        <>
        {rediriger ? <Navigate to="/admin"/> : null}
        <form>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                <div key={piece._id}>
                    <Piece piece={piece}/>
                    <input id="titre" onChange={(event) => setTitre(event.target.value)} className="form-control" placeholder="titre"></input>
                    <input id="artiste" onChange={(event) => setArtiste(event.target.value)} className="form-control" placeholder="Artiste"></input>
                    <input id="categorie" onChange={(event) => setCategorie(event.target.value)} className="form-control" placeholder="Categorie"></input>
                    <button className="btn btn-primary" onClick={() =>{Modifier()}}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => Annuler()}>Annuler</button>
                </div>
            </div>
        </form>
        </>
    )
}