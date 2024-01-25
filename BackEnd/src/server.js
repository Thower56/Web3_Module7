import express from 'express';
import { MongoClient } from 'mongodb';


const app = express();

app.use(express.json());

const getRoute = require('../routes/CRUD/get');
const postRoute = require('../routes/CRUD/post');
const putRoute = require('../routes/CRUD/put');
const deleteRoute = require('../routes/CRUD/delete');


app.use(getRoute);
app.use(postRoute);
app.use(putRoute);
app.use(deleteRoute);

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









app.listen(8000, () => console.log('Serveur démarré sur le port 8000'));