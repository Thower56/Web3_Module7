import React from "react";

export const ListeDemandeSpeciale = ({demandeSpeciale}) => {
    return(
        <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {demandeSpeciale.map((demande) => (
                    <div key={demande._id}>
                        <ul Style={"list-style-type: none"}>
                            <li><b>Client: </b>{demande.client}</li>
                            <li><b>Liste: </b>{demande.listePiece.map((piece) => <li key={demande}>piece</li>)}</li>
                            <li><b>Date creation: </b>{demande.dateAjout}</li>
                            <li><b>Statut: </b>{demande.statut}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}