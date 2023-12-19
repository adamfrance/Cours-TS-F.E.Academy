### Activité 4.01 : Création d'un modèle utilisateur à l'aide de classes, d'objets et d'interfaces

Dans cette activité, vous créerez un système d'authentification utilisateur qui imite la façon dont une application TypeScript transmettrait les données de connexion à une API backend pour enregistrer et connecter les utilisateurs à notre application de carte de score de baseball. Cela impliquera de créer plusieurs classes TypeScript et de combiner des classes et des objets pour imiter une fonctionnalité d'authentification. Effectuez les étapes suivantes pour mettre en œuvre cette activité :

- Démarrer avec le dossier starter
- Créez un fichier appelé auth.ts.
- Exécutez le compilateur TypeScript sur le fichier et surveillez les modifications.
- Créer une classe Login qui prend un objet contenant les attributs des chaînes de email et password.
- Construisez une interface appelée ILogin qui définit les attributs email et password.
- Passez-la en paramètre au constructor.
- Créez une classe Auth qui prend un objet contenant les attributs de user et source.
- Construisez une interface appelée IAuth qui définit les attributs user et source  et transmettez-les au  constructor comme paramètres de fonction. Avoir l'attribut user soit du type Login et l'attribut source du type string.
- Ajouter une méthode validUser() à la classe Auth qui revient true si email est égal à admin@example.com et si password est égal à secret123.
- Assurez-vous que vous pouvez accéder à l'attribut source de l'objet instancié Auth  et que c'est une chaîne.
- Testez le modèle utilisateur en vérifiant d'abord un utilisateur valide, puis un utilisateur non valide.

    Le résultat attendu devrait ressembler à ceci :

    Validating user...User is authenticated: true
    Validating user...User is authenticated: false