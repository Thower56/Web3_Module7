import express from 'express';


const app = express();

app.use(express.json());

const getRoute = require('../routes/CRUD/get');
const postRoute = require('../routes/CRUD/post');
const putRoute = require('../routes/CRUD/put');
const deleteRoute = require('../routes/CRUD/delete');
const getDemandeActiveRoute = require('../routes/CRUD/getDemandeActive');
const getDemandeSpecialeRoute = require('../routes/CRUD/getDemandesSpeciales');
const putStatutInactifRoute = require('../routes/CRUD/putStatutInactif');
const getDemandeDateCroissantRoute = require('../routes/CRUD/getDemandeDateCroissant');
const getDemandeDateDecroissantRoute = require('../routes/CRUD/getDemandeDateDecroissant');
const getDemandeParClientRoute = require('../routes/CRUD/getDemandeParClient');


app.use(getRoute);
app.use(postRoute);
app.use(putRoute);
app.use(deleteRoute);
app.use(getDemandeActiveRoute);
app.use(getDemandeSpecialeRoute);
app.use(putStatutInactifRoute);
app.use(getDemandeDateCroissantRoute);
app.use(getDemandeDateDecroissantRoute);
app.use(getDemandeParClientRoute);

app.listen(8000, () => console.log('Serveur démarré sur le port 8000'));