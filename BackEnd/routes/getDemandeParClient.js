const validerParametres = require('./validerParametres.js');
const express = require("express");
const utiliserDB = require('./connectToDB.js')
const router = express.Router();

router.get('/api/demandeSpeciale/:nomClient', async(requete, reponse) => {
    const {nomClient} = requete.params;

    if(validerParametres(nomClient)){
        utiliserDB(async (db) => {
            const resultat = await db.collection('demandeSpeciale').find({client: nomClient}).toArray();
            if(resultat !== null){
                reponse.status(200).json(resultat);
            }
            else{
                reponse.status(404).send("Aucune demande trouvee");
            }
        }, reponse).catch(
            () => reponse.status(500).send("Erreur: aucune demande")
        );
    }
});

module.exports = router;