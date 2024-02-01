const express = require("express");
const utiliserDB = require('./connectToDB.js')
const router = express.Router();

router.get('/api/demandeSpeciale/top', async (requete, reponse) => {
    console.log("GET /api/demandeSpeciale/top");
    utiliserDB(async (db) => {
        try {
            console.log("dans try");
            const demandeTitre = {};
            const resultat = await db.collection('demandeSpeciale').find().toArray();
            resultat.forEach(element => {
                if (demandeTitre[element.titre] === undefined) {
                    demandeTitre[element.titre] = 1;
                } else {
                    demandeTitre[element.titre] = demandeTitre[element.titre] + 1;
                }
            });
            demandeTitre = Object.keys(demandeTitre).sort(function (a, b) { return demandeTitre[b] - demandeTitre[a] });
            const topDemandes = demandeTitre.slice(0, 5);
            if (topDemandes.length > 0) {
                reponse.status(200).json(topDemandes);
            } else {
                reponse.status(404).send("Aucun titre trouve");
            }
        } catch (error) {
            reponse.status(500).send("Erreur: " + error.message);
        }
    }, reponse).catch(
        () => reponse.status(500).send("Erreur: aucun titre")
    );
});