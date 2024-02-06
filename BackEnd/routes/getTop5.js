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
                    if(demandeTitre[`${piece.titre} - ${piece.artiste} - ${piece.categorie}`] === undefined){
                        demandeTitre[`${piece.titre} - ${piece.artiste} - ${piece.categorie}`] = 1;
                    }
                    else{
                        demandeTitre[`${piece.titre} - ${piece.artiste} - ${piece.categorie}`] += 1;
                    }
                });
            });
            tableau = Object.keys(demandeTitre).sort(function(a, b){return demandeTitre[b] - demandeTitre[a]});
            let topDemandes = tableau.slice(0, 5);
            if (topDemandes.length > 0) {
                let listeObjets = topDemandes.map(demande => {
                    if (typeof demande === 'string') {
                        return {
                            titre: demande.split(' - ')[0],
                            artiste: demande.split(' - ')[1],
                            categorie: demande.split(' - ')[2]
                        };
                    } else {
                        return null;
                    }
                }).filter(objet => objet !== null);
                reponse.status(200).json(listeObjets);
            } else {
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