import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Piece } from "./Piece";

export const ListeDemandeSpecialeClient = ({Pieces, DeletePiece}) => {
    console.log("ListeDemandeSpecialeClient");
    console.log(Pieces);
    return(
        <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {Pieces.map((piece) => {
                return(
                    <div key={piece._id}>
                        <Piece piece={piece}/>
                        <Button onClick={() => DeletePiece(piece)} className="btn btn-danger" >X</Button>
                    </div>
                )
            })}
        </div>
        </>
    );
}