import React from "react";
import { Piece } from "./Piece";
import {useTranslation}  from 'react-i18next';

export const TrieParTitre = ({pieces, button}) => {

    const { t } = useTranslation();

    const sansBoutton = () => {
        return (
        pieces.sort((a, b) => a.titre.localeCompare(b.titre)).map((piece) => (
            <div key={piece._id}>
                <ul Style={"list-style-type: none"}>
                    <li><Piece piece={piece}/></li>
                </ul>
            </div>)));
    }

    const avecBoutton = () => {
        return (
        pieces.sort((a, b) => a.titre.localeCompare(b.titre)).map((piece) => (
            <div key={piece._id}>
                <ul Style={"list-style-type: none"}>
                    <li><Piece piece={piece}/></li>
                    <button className="btn btn-primary" onClick={()=> button(piece._id)}>{t("ajouter")}</button>
                </ul>
            </div>)))
    }

    return(
        button ? avecBoutton() : sansBoutton()
        )
}