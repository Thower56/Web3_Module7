import React from "react";
import { Piece } from "../composants/Piece";
import 'bootstrap/dist/css/bootstrap.css';

export const PageSupprimer = ({piece}) => {
    const [rediriger, setRediriger] = useState(false);
    const {id} = useParams();

    const EffacerPiece = async (id) => {
        const requestOptions = {
            method: 'DELETE'
        };
        let reponse = await fetch(`http://localhost:8000/api/piece`);
        if(reponse.status === 200){
            const body = await reponse.json();
        }
       
        reponse = await fetch(`http://localhost:8000/api/pieces/${id}/supprimer`, requestOptions);
        if(reponse.status === 200){console.log("Supprimé avec succès!");}
        else{console.log("Erreur lors de la suppression.");}
        window.location.reload();
    };

    const Annuler = () => {
        setRediriger(true);
    };

    return(
        <>
            {rediriger ? <Navigate to="/admin"/> : null}
            <h1>Supprimer une pièce</h1>
            <span>Voulez-vous vraiment supprimer la piece: </span>
            <Piece piece={piece}/>
            <button className="btn btn-danger" onClick={() => {EffacerPiece}}>Oui</button>
            <button className="btn btn-primary" onClick={() => {Annuler}}>Non</button>
        </>
    )
};