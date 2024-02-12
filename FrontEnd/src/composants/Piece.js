import React from "react";
import { useTranslation } from "react-i18next";


export const Piece = ({ piece }) => {

    const { t } = useTranslation();
    return (
        <>
            <p><b>{t("titre")}: </b> {piece.titre}</p>
            <p><b>{t("artiste")}: </b> {piece.artiste}</p>
            <p><b>{t("categorie")}: </b>{piece.categorie}</p>
        </>
    )
}