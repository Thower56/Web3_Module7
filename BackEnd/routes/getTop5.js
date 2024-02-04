const express = require("express");
const utiliserDB = require('./connectToDB.js')
const router = express.Router();

router.get('/api/demandeSpeciale/top5', async(requete, reponse)=>{
    utiliserDB(async(db) => {
        try{
            let demandeTitre = {};
            const resultat = await db.collection('demandeSpeciale').find().toArray();
            resultat.forEach(element => {
                if(demandeTitre[element.titre] === undefined){
                    demandeTitre[element.titre] = 1;
                }
                else{
                    demandeTitre[element.titre] = demandeTitre[element.titre] + 1;
                }
            });
            demandeTitre = Object.keys(demandeTitre).sort(function(a, b){return demandeTitre[b] - demandeTitre[a]});
            let topDemandes = demandeTitre.slice(0, 5);
            if(topDemandes.length > 0){
                reponse.status(200).json(topDemandes);
            }
            else{
                reponse.status(200).send([]);
            }
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