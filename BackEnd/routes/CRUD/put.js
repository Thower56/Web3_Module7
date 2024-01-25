import { MongoClient } from 'mongodb'
const express = require("express");
const { ObjectId } = require('mongodb');
const utiliserDB = require('./connectToDB.js')
const router = express.Router();


router.put('/api/pieces/:id/modifier', async (requete, reponse) => {
    const id = requete.params.id;
    const { titre, artiste, categorie } = requete.body;

    if (!id){
        reponse.status(500).send("Il faut renseigner l'identifiant");
    }

    utiliserDB(async (db) => {
        const piece = await db.collection('repertoire').findOne({_id: new ObjectId(id)});
        if (piece !== null && piece !== undefined){
            piece.titre = titre;
            piece.artiste = artiste;
            piece.categorie = categorie;
           
            await db.collection('repertoire').updateOne({_id: new ObjectId(id)}, {
                '$set': {
                    titre, artiste, categorie
                }
            });
            reponse.status(200).send("La piece a ete modifieee avec succes!");
        }
        else{
            reponse.status(404).send("La piece n'a pas ete modifiee");
        }
    }, reponse).catch(
        () => reponse.status(500).send("Erreur: echec de la modification")
    )
});

module.exports = router;
