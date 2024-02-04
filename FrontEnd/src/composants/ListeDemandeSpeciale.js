import React from "react";

export const ListeDemandeSpeciale = ({demandeSpeciale, handleClickDesactiver, setDemandeSpeciale}) => {
    return(
        <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {demandeSpeciale.length > 0 && demandeSpeciale.map((demande) => (
                    <div key={demande._id}>
                        <ul style={{listStyleType: "none"}}>
                            <li key={`client_${demande._id}`}><b>Client: </b>{demande.client}</li>
                            <li key={`liste_${demande._id}`}><b>Liste: </b>{demande.listePiece.map((piece, index) => <div key={index}>{piece}</div>)}</li>
                            <li key={`date_${demande._id}`}><b>Date creation: </b>{demande.dateAjout}</li>
                            <li key={`statut_${demande._id}`}><b>Statut: </b>{demande.statut}</li>
                            {demande.statut === 'actif' && (
                                <button onClick={() => handleClickDesactiver(demande._id, demandeSpeciale, setDemandeSpeciale)}>
                                    Desactiver
                                </button>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}