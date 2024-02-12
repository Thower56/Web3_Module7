import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Piece } from "../composants/Piece";
import { Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { BarreNavigationAdmin } from "./DemandeSpecialeAdmin/BarreNavigationAdmin";
import {useTranslation} from "react-i18next";

export const PageModifier = () => {
    const { t } = useTranslation();
    const [piecesModifier, setPieces] = useState();
    const [titre, setTitre] = useState();
    const [artiste, setArtiste] = useState();
    const [categorie, setCategorie] = useState();
    const [rediriger, setRediriger] = useState(false);
    const param = useParams();
    
    const getPiece = async () => {
        if(piecesModifier === undefined){
            try {
                const resultat = await fetch(`http://localhost:8000/api/pieces/${param.id}`);
                const body = await resultat.json();
                setPieces(body);
            } catch (error) {
                console.log('Error:', error);
            }
        } 
    }

    useEffect(() => {
        getPiece();
        if (piecesModifier) {
            ModifierPiece();
        }
    }, [piecesModifier]);
    
    const ModifierPiece = async () => {
        
        console.log("Editing piece:", piecesModifier);
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(piecesModifier)
            
        };
        console.log(requestOptions);
        const response = await fetch(`http://localhost:8000/api/pieces/${param.id}/modifier`, requestOptions);
        console.log(response);
        if (response.status === 200) {
            console.log("Piece modifier!");
        } else {
            console.log("Erreur lors de la modification.");
        }
        
    };

    const Modifier = () => {
        let piece = {categorie: "", artiste: "", titre: ""};
        piece.categorie = categorie ? categorie : document.getElementById("categorie")?.value;
        piece.artiste = artiste ? artiste : document.getElementById("artiste")?.placeholder;
        piece.titre = titre ? titre :  document.getElementById("titre")?.placeholder;
        const confirmation = window.confirm("Voulez-vous vraiment modifier cette pièce?");
        if(confirmation){
            setPieces(piece, ModifierPiece);
            console.log("Piece modifier: ");
            console.log(piecesModifier);
        }
    };

    const Annuler = () => {
        setRediriger(true);
    };

    return(
        <>
        {rediriger ? <Navigate to="/repertoireAdmin"/> : null}

            <BarreNavigationAdmin />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                <div>
                    {piecesModifier ? <Piece piece={piecesModifier}/> : null}
                    {piecesModifier ? <input id="titre" onChange={(event) => setTitre(event.target.value)} className="form-control" placeholder={piecesModifier.titre}></input> : null}
                    {piecesModifier ? <input id="artiste" onChange={(event) => setArtiste(event.target.value)} className="form-control" placeholder={piecesModifier.artiste}></input> : null}
                    {piecesModifier ? <input id="categorie" onChange={(event) => setCategorie(event.target.value)} className="form-control" placeholder={piecesModifier.categorie}></input> : null}
                    <button className="btn btn-primary" onClick={() => {Modifier(); ModifierPiece();}}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => {Annuler()}}>Annuler</button>
                </div>
            </div>

        </>
    )
}
