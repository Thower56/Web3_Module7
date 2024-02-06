const express = require("express");
const { ObjectId } = require('mongodb');
const utiliserDB = require('./connectToDB.js')
const router = express.Router();

router.post('/api/demandeSpeciale/ajouter', async (requete, reponse) => {
    console.log("/api/demandeSpeciale/ajouter");
    console.log(requete.body);
    const {client, demandePieces} = requete.body;
    console.log("Client: " + client);
    console.log("DemandePieces: " + demandePieces);

    if(client !== undefined && demandePieces !== undefined){
        utiliserDB(async (db) => {

            const body = 
            {
                client: client,
                listePiece: demandePieces,
                dateAjout: new Date(),
                statut: "actif"
            }
            console.log("Body: " + body.listePiece[0].titre);


            await db.collection('demandeSpeciale').insertOne({
                client: client,
                listePiece: demandePieces,
                dateAjout: new Date(),
                statut: "actif"
            });
            reponse.status(200).send("Demande ajoutee avec succes!");
                      
        }, reponse).catch(
            () => reponse.status(404).send("La demande n'a pas ete ajoutee")
        );
    }
    else{
        reponse.status(500).send("Erreur : La demande n'a pas ete ajoutee");
    }
})

module.exports = router;
