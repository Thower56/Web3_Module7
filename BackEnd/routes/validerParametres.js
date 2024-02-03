const express = require("express");
const router = express.Router();

export function validerParametres (parametres) {
    let result = false;

    for (let parametre in parametres){
        if (parametre !== undefined && parametre !== null && parametre !== ""){
            result = true;
        }
    }
    return result;
}

module.exports = validerParametres;