import React from "react";

export const ListeDemandeSpeciale = ({demandeSpeciale, handleClickDesactiver, setDemandeSpeciale}) => {
    return(
        <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {demandeSpeciale.length > 0 && demandeSpeciale.map((demande) => (
                    <div key={demande._id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", borderColor: "blue"}}>
                        <ul style={{listStyleType: "none"}}>
                            <li key={`client_${demande._id}`}><b>Client: </b>{demande.client}</li>
                            <li key={`liste_${demande._id}`}><b>Liste: </b>
                                <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
                                    {demande.listePiece.map((piece, index) => <li key={index}>-<b>titre:</b> {piece.titre} <b>artiste: </b> {piece.artiste}</li>)}
                                </ul>
                            </li>
                            <li key={`date_${demande._id}`}><b>Date creation: </b>{demande.dateAjout}</li>
                            <li key={`statut_${demande._id}`}><b>Statut: </b>
                                <span style={{color: demande.statut === 'actif' ? 'blue' : 'red'}}>{demande.statut}</span></li>
                            {demande.statut === 'actif' && (
                                <button className="btn btn-warning" onClick={() => handleClickDesactiver(demande._id, demandeSpeciale, setDemandeSpeciale)}>
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