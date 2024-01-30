const express = require("express");
const utiliserDB = require('./connectToDB.js')
const router = express.Router();

router.get('/api/demandeSpeciale/top5', async(requete, reponse) => {
    utiliserDB(async(db) => {
        try{
            const demandeTitre = {};
            const resultat = await db.collection('demandeSpeciale').find().toArray();
            resultat.forEach(element => {
                if(demandeTitre[element.titre] === undefined){
                    demandeTitre[element.titre] = 1;
                }
                else{
                    demandeTitre[element.titre] = demandeTitre[element.titre] + 1;
                }
            });
            const titresClasses = Object.keys(titre).sort(function(a,b){return titre[b]-titre[a]});
            const topDemandes = titresClasses.slice(0,5);
            if (topDemandes.length > 0){
                reponse.status(200).json(resultat);
            }
            else{
                reponse.status(404).send("Aucun titre trouve");        
            }
        }
        catch(error){
            reponse.status(500).send("Erreur: " + error.message);
        }
    }, reponse).catch(
        () => reponse.status(500).send("Erreur: aucun titre")
    );
});