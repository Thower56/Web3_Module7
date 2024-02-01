import {React, useState} from "react";
import { pieces } from '../composants/contenu-pieces-test';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Piece } from "./Piece";

export const ListePiecesAdmin = ({pieces}) => {
    const navigate = useNavigate();
    
    const ModifierPiece = (id) => {
        navigate(`/modifier/${id}`);
    };

    const EffacerPiece = (id) => {
        navigate(`/modifier/${id}`);
    };


    return(
        <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {pieces.map((piece) => (
                <div key={piece._id}>
                    <Piece piece={piece}/>
                    <button className="btn btn-primary" onClick={() =>{ModifierPiece(piece?._id)}}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => {EffacerPiece(piece?._id)}}>Effacer</button>
                </div>
            ))}
        </div>
        </>
    )
}