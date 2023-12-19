### Activité 2.01 : Construire un fichier de déclaration de carte thermique

Dans cet exercice, vous créerez une application TypeScript nommée heat map log system pour suivre les données des terrains de baseball et garantir l'intégrité des données. Vous utiliserez un fichier de déclaration TypeScript pour créer le système de types du programme. À partir de ce point, vous importerez la bibliothèque Lodash et ajouterez la vérification de type au programme en implémentant les définitions de type de DefinitelyTyped.

Les étapes sont les suivantes:

- Vous recevrez le code pour démarrer cette activité
- Créez un fichier appelé heat_map_data.ts.
- Exécutez le compilateur TypeScript sur le fichier et surveillez les modifications.
- Créez un fichier de déclaration et définissez un module appelé HeatMapTypeset exportez l'interface nommée Pitcher.
- Définissez trois attributs pour le Pitchermodule: batterHotZones, pitcherHotZones, et coordinateMap.
- Les structures de données doivent être les mêmes pour les trois attributs, Array<Array<number>>, mais coordinateMap devrait être facultatif.
- Ensuite, importez les fichiers de déclaration dans le heat_map_data.tsdéposer. Ensuite, créez et exportez un let appelée data et attribuez-le au type Pitcher.
- Ajoutez des valeurs qui respectent les règles de déclaration, en vous assurant que l'un des tableaux imbriqués est identique dans les attributs batterHotZones et pitcherHotZones.
- Créez une nouvelle fonction appelée findMatch qui englobe à la fois les tableaux batterHotZones et pitcherHotZones et utiliser les fonctions lodash, intersectionWith pour renvoyer le tableau imbriqué identique. Vous devrez importer la bibliothèque Lodash, qui a été installée lors de l'exécution initiale de npm install. Enfin, stockez la valeur de l'attribut findMatch dans le coordinateMap qui a été défini dans le fichier de déclaration.

Le résultat attendu de cette activité sera un tableau imbriqué qui ressemble à ceci :

    [[10.2, -5], [3, 2]]