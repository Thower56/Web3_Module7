const { MongoClient } = require('mongodb');

const utiliserDB = async (operations, reponse) => {
    try{
        const client = await MongoClient.connect('mongodb://0.0.0.0:27017');
        const db = client.db('musicotheque');
        await operations(db);
        client.close();
    }
    catch(error){
        reponse.status(500).send("Erreur de connexion a la bd", error);
    }
};

module.exports = utiliserDB;