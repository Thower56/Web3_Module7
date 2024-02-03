import validerParametres from './validerParametres.js';
const express = require("express");
const { ObjectId } = require('mongodb');
const utiliserDB = require('./connectToDB.js')
const router = express.Router();


router.put('/api/demandeSpeciale/inactif/:id', async (requete, reponse) => {
    const id = requete.params.id;

    if (validerParametres(id)){       
        utiliserDB(async (db) => {
            const resultat = await db.collection('demandeSpeciale').updateOne({_id: new ObjectId(id)}, {
                '$set': {
                    statut: "inactif"
                }
            });
            console.log(resultat);
            if (resultat !== null){
                reponse.status(200).json(resultat);
            }
            else{
                reponse.status(404).send("La demande n'a pas ete trouvee");
            }
        }, reponse).catch(
            () => reponse.status(500).send("Erreur: La demande n'a pas ete trouvee")
            );
    }
});

module.exports = router;