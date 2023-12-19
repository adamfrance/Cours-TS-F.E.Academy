## Dans cette activité, nous allons créer une application Web qui communique avec l'API que nous venons de créer. Bien que des frameworks tels que Angular, React et Vue soient très populaires, ils sont abordés dans les chapitres suivants. Nous allons donc créer une application TypeScript très basique.

Note

Cette activité fournit une application d'interface utilisateur qui communique avec l'API backend que nous avons créée dans l'exercice 12.06 , Implémentation d'une API RESTful soutenue par sqlite . Afin d’afficher le résultat, vous devrez exécuter votre API. Revenez à cet exercice pour obtenir de l'aide si vous en avez besoin.

Cette application UI se connectera à notre API et nous permettra de modifier les données que nous stockons dans notre base de données. Nous pourrons lister les données que nous avons enregistrées (les promesses que nous faisons), créer de nouveaux éléments à sauvegarder et supprimer des éléments. Notre application d'interface utilisateur devra faire des appels GET, POST, et DELETE à notre API backend. Il devra utiliser un client HTTP pour ce faire. Nous pourrions installer une bibliothèque telle que axios pour gérer cela ou nous pourrions utiliser l'API Fetch native disponible dans tous les navigateurs Web modernes.

Notre application Web devra également être capable de mettre à jour dynamiquement l'interface utilisateur. Des bibliothèques de vues modernes telles que react ou vue, mais dans ce cas, nous sommes sans framework, nous devrons donc utiliser davantage d'API DOM (document object model) telles que getElementById, createElement, et appendChild. Ceux-ci sont disponibles nativement dans tous les navigateurs Web sans qu’aucune bibliothèque ne soit nécessaire.

L'implémentation de cette application à l'aide de promesses sera essentielle car tous les appels d'API seront asynchrones. Nous effectuerons une action, comme un clic, notre application appellera l'API, puis elle répondra avec des données et alors et seulement alors la promesse sera résolue et provoquera un changement dans l'état du DOM.

#### Voici quelques étapes de haut niveau qui vous permettront de créer l'application :


- Créer une page html statique  avec css servie via http-server pour le développement local.
- Ajouter un fichier app.ts pour faire une requête Web au backend en utilisant fetchet effectuez la manipulation DOM requise en fonction de la réponse.
- Transpiler le déposer app.ts dans app.js et testez sur le serveur local à l’aide d’un navigateur Web.
- Apporter des ajustements à app.ts et continuez les tests jusqu'à ce que tous les scénarios fonctionnent.

Une fois l'activité terminée, vous devriez pouvoir visualiser le formulaire sur localhost:8080.