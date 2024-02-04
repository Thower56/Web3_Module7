const express = require("express");
const utiliserDB = require('./connectToDB.js')
const router = express.Router();

router.get('/api/demandeSpeciale/dateOrdreDecroissant', async(requete, reponse) => {
    utiliserDB(async(db) => {
        try{
            const resultat = await db.collection('demandeSpeciale').find().toArray();
            const resultatTrie = resultat.sort((a, b) =>  b.dateAjout.localeCompare(a.dateAjout));
            if (resultatTrie !== null){
                reponse.status(200).json(resultatTrie);
            }
            else{
                reponse.status(404).send("Aucune demande trouvee");        
            }
        }
        catch(error){
            reponse.status(500).send("Erreur: " + error.message);
        }
    }, reponse).catch(
        () => reponse.status(500).send("Erreur: aucune demande")
    );
});

module.exports = router;