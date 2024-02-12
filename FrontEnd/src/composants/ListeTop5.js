import React from "react";
import { useTranslation } from "react-i18next";

export const ListeTop5 = ({ topDemandes }) => {

    const { t } = useTranslation();
    return (
        <div>
            <ul>
                {topDemandes.map((demande, index) => (
                    <li key={index}>
                        <strong>{t("titre")}: </strong>{demande.titre}<br/>
                        <strong>{t("artiste")}: </strong>{demande.artiste}<br/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

