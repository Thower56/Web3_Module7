const express = require("express");
const router = express.Router();

function validerParametres (parametres) {
    let result = false;

    for (let parametre in parametres){
        if (parametre !== undefined && parametre !== null && parametre !== ""){
            result = true;
        }
    }
    return result;
}

module.exports = router;