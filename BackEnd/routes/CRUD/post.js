import { MongoClient } from 'mongodb'
const express = require("express");
const { ObjectId } = require('mongodb');
const utiliserDB = require('./connectToDB.js')
const router = express.Router();


router.post('/api/pieces/ajouter', async (requete, reponse) => {
    const { titre, artiste, categorie } = requete.body;

    if(titre !== undefined && artiste !== undefined && categorie !== undefined){
        utiliserDB(async (db) => {
            const piece = await db.collection('repertoire').findOne({titre, artiste, categorie});

            if(piece !== null){
                reponse.status(404).send("La piece existe deja");
            }
            else{
                await db.collection('repertoire').insertOne({
                    titre: titre,
                    artiste: artiste,
                    categorie: categorie
                });
                reponse.status(200).send("Piece ajoutee avec succes!");
            }            
        }, reponse).catch(
            () => reponse.status(404).send("La piece n'a pas ete ajoutee")
        );
    }
    else{
        reponse.status(500).send("Erreur : La piece n'a pas ete ajoutee");
    }
});

module.exports = router;
