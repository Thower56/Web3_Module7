const express = require("express");
const { ObjectId } = require('mongodb');
const utiliserDB = require('./connectToDB.js')
const router = express.Router();


router.get('/api/pieces', async(requete, reponse) => {
    utiliserDB(async(db) => {
        try{
            const resultat = await db.collection('repertoire').find().toArray();
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
        () => reponse.status(500).send("Erreur: ")
    );
})

router.get('/api/pieces/:id', async (requete, reponse) => {
    const id = requete.params.id;

    utiliserDB(async (db) => {
        const resultat = await db.collection('repertoire').findOne({_id: new ObjectId(id)});
        console.log(resultat);
        if (resultat !== null){
            reponse.status(200).json(resultat);
        }
        else{
            reponse.status(404).send("La piece n'a pas ete trouve");
        }
    }, reponse).catch(
        () => reponse.status(500).send("Erreur: La piece n'a pas ete trouve")
    );
})

module.exports = router;