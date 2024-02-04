const express = require("express");
const utiliserDB = require('./connectToDB.js')
const router = express.Router();

router.get('/api/demandeSpeciale/active', async(requete, reponse) => {
    utiliserDB(async(db) => {
        try{
            const resultat = await db.collection('demandeSpeciale').find({statut: "actif"}).toArray();
            if (resultat.length > 0){
                reponse.status(200).json(resultat);                
            }
            else{
                reponse.status(200).send([]);        
            }
        }
        catch(error){
            reponse.status(500).send("Erreur: " + error.message);
        }
    }, reponse).catch(
        () => reponse.status(500).send("Erreur: aucune liste")
    );
});

module.exports = router;