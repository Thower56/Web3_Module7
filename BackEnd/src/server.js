import express from 'express';


const app = express();

app.use(express.json());

const getRoute = require('../routes/get');
const postRoute = require('../routes/post');
const putRoute = require('../routes/put');
const deleteRoute = require('../routes/delete');
const getDemandeActiveRoute = require('../routes/getDemandeActive');
const getDemandeSpecialeRoute = require('../routes/getDemandesSpeciales');
const putStatutInactifRoute = require('../routes/putStatutInactif');
const getDemandeDateCroissantRoute = require('../routes/getDemandeDateCroissant');
const getDemandeDateDecroissantRoute = require('../routes/getDemandeDateDecroissant');
const getDemandeParClientRoute = require('../routes/getDemandeParClient');
const getTop5Route = require('../routes/getTop5');


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
app.use(getTop5Route);

app.listen(8000, () => console.log('Serveur démarré sur le port 8000'));