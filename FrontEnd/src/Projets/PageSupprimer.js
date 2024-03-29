import React from "react";
import { Piece } from "../composants/Piece";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, Navigate, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";


export const PageSupprimer = ({piece}) => {
    const { t } = useTranslation();
    const [pieces, setPieces] = useState();
    const [rediriger, setRediriger] = useState(false);
    const param = useParams();
    const navigate = useNavigate();

    const getPiece = async () => {
        try {
            const resultat = await fetch(`http://localhost:8000/api/pieces/${param.id}`);
            const body = await resultat.json();
            setPieces(body);
        } catch (error) {
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        getPiece();
    }, []);

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
        navigate("/repertoireAdmin");
    };

    const Annuler = () => {
        navigate("/repertoireAdmin");
    };

    return(
        <>
            {rediriger ? <Navigate to="/repertoireAdmin"/> : null}
            <h1>{t('titreSuppression')}</h1>
            <span>{t('confirmation')}</span>
            {pieces ? <Piece piece={pieces}/> : null}
            <button className="btn btn-danger" onClick={() => {EffacerPiece(pieces._id)}}>{t('oui')}</button>
            <button className="btn btn-primary" onClick={() => {Annuler()}}>{t('non')}</button>
        </>
    )
};