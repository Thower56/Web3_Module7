const express = require("express");
const utiliserDB = require('./connectToDB.js')
const router = express.Router();

router.get('/api/demandeSpeciale-top5', async(requete, reponse)=>{
    utiliserDB(async(db) => {
        try{
            let demandeTitre = {};
            let tableau;
            const resultat = await db.collection('demandeSpeciale').find().toArray();
            resultat.forEach(element => {
                let {listePiece} = element;
                listePiece.forEach(piece => {
                    if(demandeTitre[`${piece.titre} - ${piece.artiste}`] === undefined){
                        demandeTitre[`${piece.titre} - ${piece.artiste}`] = 1;
                    }
                    else{
                        demandeTitre[`${piece.titre} - ${piece.artiste}`] += 1;
                    }
                });
            });
            tableau = Object.keys(demandeTitre).sort(function(a, b){return demandeTitre[b] - demandeTitre[a]});
            let topDemandes = tableau.slice(0, 5);
            console.log(tableau);
            let retour = resultat.find(demande => topDemandes.includes(demande.listePiece.titre));
            console.log(retour);
            if(topDemandes.length > 0){
                reponse.status(200).json(topDemandes);
            }
            else{
                reponse.status(200).send([]);
            }
            console.log(topDemandes)
        }
        catch(error){
            console.log("dans catch reponse status 500");

            reponse.status(500).send("Erreur: " + error.message);
        }
    }, reponse).catch(
        () => reponse.status(500).send("Erreur: aucun titre")
    );
})

module.exports = router;