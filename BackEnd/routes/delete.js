import { MongoClient } from 'mongodb'
const express = require("express");
const { ObjectId } = require('mongodb');
const utiliserDB = require('./connectToDB.js')
const router = express.Router();


router.delete('/api/pieces/:id/supprimer', async (requete, reponse) => {
    const id = requete.params.id;
    
    utiliserDB(async (db) => {
        const piece = await db.collection('repertoire').findOne({_id: new ObjectId(id)});
        if (piece !== null){
            const resultat = await db.collection('repertoire').deleteOne(piece);
            if (resultat.deletedCount === 1){
                reponse.status(200).send(`${resultat.deletedCount} piece supprimee`);
            }
            else{
                reponse.status(404).send("La piece n'a pas ete supprimee");
            }
        }
        
    }, reponse).catch(
        () => reponse.status(500).send("Erreur: la piece n'a pas pas ete supprimee")
    );
});

module.exports = router;
