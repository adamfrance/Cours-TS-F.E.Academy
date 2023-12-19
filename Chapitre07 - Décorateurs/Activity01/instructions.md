## Activité 7.01 : Créer des décorateurs pour le comptage des appels

En tant que développeur d'un service backend pour un site Web, vous êtes chargé de créer une solution qui permettra au service des opérations d'avoir un audit clair sur le comportement du service. Pour cela, l'application doit avoir un décompte de toutes les instanciations de classe et appels de méthodes.

Dans cette activité, vous allez créer des décorateurs de classe et de méthode qui peuvent être utilisés pour compter les instanciations de classe et les appels de méthodes. Vous allez créer une classe contenant des données sur une personne et utiliser les décorateurs pour compter combien d'objets de ce type ont été créés et combien de fois chaque méthode a été appelée. Après avoir construit plusieurs objets et utilisé leurs propriétés, jetez un œil aux valeurs des compteurs.

Le but de cette activité est de démontrer les utilisations des décorateurs de classes et de méthodes afin de répondre à une préoccupation transversale de votre application, sans changer les fonctionnalités de la classe donnée. Vous devez disposer d’une statistique détaillée des cycles de vie de vos objets, sans ajouter aucune complexité à la logique métier.

Les étapes suivantes devraient vous aider à trouver la solution :


- Créez une classe appelée Person avec des propriétés publiques nommées firstName, lastName, et birthday.
- Ajoutez un constructeur qui initialise les propriétés via les paramètres du constructeur.
- Ajoutez un champ privé appelé _title et exposez-le via un getter et un setter en tant que propriété appelée title.
- Ajoutez une méthode appelée getFullName qui renverra le nom complet d'une personne.
- Ajoutez une méthode appelée getAge qui renverra l'âge actuel de la personne (en soustrayant l'anniversaire de l'année en cours).
- Créez un objet global appelé count et initialisez-le à l'objet vide. Ce sera votre variable d'état, où vous stockez les décomptes pour chaque instanciation et invocation.
- Créez une usine de décorateur d'emballage de constructeur appelée CountClass cela prendra un paramètre de chaîne appelé counterName. Nous utiliserons ce paramètre comme clé dans l'objet count.
- À l'intérieur du code d'emballage, augmentez la propriété count de l'objet définie dans le paramètre counterName par 1.
- N'oubliez pas de définir la chaîne de prototypes du constructeur enveloppé.
- Créez une fabrique de décorateurs d'emballage de méthodes appelée CountMethod qui prendra un paramètre de chaîne appelé counterName.
- Ajoutez des contrôles pour savoir si le paramètre descriptor a value, get, et setpropriétés. Vous devez couvrir à la fois les cas où ce décorateur est utilisé comme accesseur et comme décorateur de méthode.
- Dans chaque branche respective, ajoutez du code qui encapsule la méthode.
- À l'intérieur du code d'emballage, augmentez la propriété count de l'objet définie dans le paramètre counterName par 1.
- Décorez la classe en utilisant le décorateur CountClass, avec un paramètre person.
- Décorer les getter de propriété getFullName, getAge, et le title  avec le décorateur CountMethod, en utilisant les paramètres person-full-name, person-age, et person-title, respectivement. Notez que vous ne devez décorer qu’un seul des accesseurs de la propriété.
- Écrivez du code en dehors de la classe qui instanciera trois objets person.
- Écrivez le code qui appellera les méthodes getFullName et getAge  sur les objets
- Écrivez du code qui vérifiera si la propriété title est vide et définissez-la sur quelque chose si elle l'est.
- Écrivez du code qui affichera l'objet count sur la console afin de voir si vos décorateurs fonctionnent correctement.

Le résultat attendu est le suivant :

{
    person: 3,
    "person-full-name": 3,
    "person-age": 3,
    "person-title": 6
}

Cette activité démontre la puissance de l'utilisation de décorateurs pour étendre et augmenter les capacités de vos classes sans polluer le code. Vous avez pu injecter une exécution de code personnalisé dans vos objets, sans modifier la logique métier sous-jacente. 