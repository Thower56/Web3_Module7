import React from "react";

export const ListeTop5 = ({ topDemandes }) => {
    return (
        <div>
            <ul>
                {topDemandes.map((demande, index) => (
                    <li key={index}>
                        <strong>Titre: </strong>{demande.titre}<br/>
                        <strong>Artiste: </strong>{demande.artiste}<br/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

