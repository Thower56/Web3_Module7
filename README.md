# Liste de répertoire – Travail pratique		35 points



## Mandat

Dans le cadre de ce travail, nous voulons pousser plus loin notre concept pour une application Web de liste de répertoire en ligne prévue pour être utilisée par un administrateur et des clients.

Le travail s’effectuera en équipe de deux. Afin de mieux organiser notre développement, nous définirons des récits utilisateurs qui seront assignés à chaque membre de l’équipe. Ainsi il vous sera possible de faire votre partie indépendamment de l’avancement de vos coéquipiers. Les récits devront être découpés en tâches et chacune d’elles devra être dans un seul commit fonctionnel.

Une grande marge de manœuvre vous est accordée pour ce travail. Assurez-vous de bien définir votre stratégie avant de vous avancer trop loin. Pour la durée du travail, l’enseignant assumera les rôles de client et de chef d’équipe. Dans le doute, référez-vous à lui!

---

## Fonctionnalités

### Section administrateur

Au niveau administrateur, on veut gérer le répertoire ainsi que des demandes spéciales :

Les récits utilisateurs sont :<br>
- En tant qu’administrateur, je veux être capable de consulter les données de mon répertoire;<br>
- En tant qu’administrateur, je veux pouvoir créer une pièce en lui spécifiant un titre, un artiste et une ou plusieurs catégories;<br>
- En tant qu’administrateur, je veux pouvoir modifier les données d’une pièce existante;<br>
- En tant qu’administrateur, je veux pouvoir retirer une pièce de mon répertoire;<br>
- En tant qu’administrateur, je veux être capable de consulter toutes les demandes spéciales envoyées par les clients;<br>
- En tant qu’administrateur, je veux être capable d’étiqueter une demande traitée comme étant inactive (sans pour autant la retirer de l’historique des demandes spéciales);<br>
- En tant qu’administrateur, je veux être capable de consulter uniquement les demandes spéciales actives;<br>
- En tant qu’administrateur, je veux être capable de trier les demandes spéciales par date d’ajout selon l’ordre croissant ou décroissant;<br>
- En tant qu’administrateur, je veux être capable de filtrer les demandes spéciales par nom de client;<br>
- En tant qu’administrateur, je veux être capable de consulter les 5 pièces les plus demandées.<br>



---

### Section client

Cette section concerne la partie client pour ce qui est de la gestion des demandes spéciales. 

Les récits utilisateurs sont :<br>
- En tant que client, je veux être capable de consulter le répertoire disponible trié par catégories;<br>
- En tant que client, je veux être capable de créer une nouvelle liste de demandes spéciales en y ajoutant mon nom;<br>
- En tant que client, je veux être capable d’ajouter n’importe quelle pièce du répertoire à une liste de demandes spéciales;<br>
- En tant que client, je veux être capable de retirer n’importe quelle pièce du répertoire à une liste de demandes spéciales;<br>
- En tant que client, je veux être capable d’envoyer une liste de demande spéciales avec mon nom;<br>
- En tant que client, lors de la création/modification d’une liste de demandes spéciales, je veux être capable de trier les pièces du répertoire par ordre croissant et décroissant des champs « titre », « artiste » et « catégorie ».<br>
- En tant que client, lors de la création/modification d’une liste de demandes spéciales, je veux être capable d’entrer des caractères pour filtrer le répertoire selon le titre, l’artiste et la catégorie;<br>

---

## Remise : 11 février à minuit

À faire avant le 30 janvier à minuit :

- Une personne de votre équipe devra envoyer par Mio le lien de votre dépôt git. Aucun code après la remise ne sera considéré.

- De plus, une personne de votre équipe devra envoyer par Mio la composition de l’équipe avec la fonctionnalité attribuée à chaque membre.


## Pondération

Note individuelle (30 points) :

Dans ce travail, une fonctionnalité est assignée par équipier dont il/elle est reponsable. L’avancement des fonctionnalités de vos coéquipiers n’affectera pas votre note individuelle.

Les points qui seront évalués pour le travail individuel seront :
- Respect des fonctionnalités souhaitées (15 points);
- Qualité du code (5 points);
- Découpage et qualité des commits (5 points);
- Convivialité de l’application (3 points);
- Présence de fichiers JSON pour peupler la base de données (2 points).

Note d’équipe (5 points) :

Sur Git, organisez vos travaux de manière à éviter de faire des commits en parallèle. Structurez votre branche de développement principale de manière à être la plus linéaire possible. Un bonus de 10 % sera accordé à une équipe qui arrive à faire tout son développement sans aucun embranchement.

