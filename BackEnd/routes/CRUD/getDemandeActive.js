const express = require("express");
const utiliserDB = require('./connectToDB.js')
const router = express.Router();

router.get('/api/demandeSpeciale/active', async(requete, reponse) => {
    utiliserDB(async(db) => {
        try{
            const resultat = await db.collection('demandeSpeciale').find({statut: "active"}).toArray();
            if (resultat !== null){
                reponse.status(200).json(resultat);
            }
            else{
                reponse.status(404).send("Aucune liste trouvee");        
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