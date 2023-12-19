## Activité 8.01 : Calculatrice basée sur DI

En tant que développeur TypeScript, vous êtes chargé de créer une calculatrice. Comme toute calculatrice, vous avez besoin de votre application pour effectuer les quatre opérations mathématiques de base : addition (+), soustraction (-), multiplication (*) et division (/).

Note

Pour garder les choses simples et concentrées uniquement sur DI, vous n'ajouterez pas de prise en charge d'opérateurs supplémentaires (par exemple, puissance (^)), ni ne prendrez en charge l'ordre des opérations, votre calculatrice se contentera donc de parcourir l'expression de gauche à droite. et effectuez l'opération correspondante. Par exemple, l'expression ( 13+5*3-7 aura pour résultat 47 et pas le mathématiquement correct 21).

Pour réaliser cette activité, vous devrez implémenter InversifyJS et utiliser IoC pour fournir les opérateurs mathématiques sur lesquels la calculatrice peut fonctionner.

Vous pouvez commencer avec le projet de démarrage et le développer en suivant les étapes générales fournies ici. Cette activité mettra à l’épreuve les compétences que vous avez développées non seulement dans ce chapitre mais aussi dans les précédents. Par conséquent, n'hésitez pas à jeter un coup d'œil à la solution pour déboguer tout problème que vous pourriez rencontrer avec votre implémentation ou votre code.

Note

Le dossier activity-starter contient les fichiers modèles que vous pouvez utiliser pour coder cette activité.

### Effectuez les étapes suivantes pour mettre en œuvre cette activité :

- Vous devrez commencer par créer l’élément de base de votre calculatrice – un opérateur défini via une interface.
- Créez ensuite des opérateurs d’addition, de soustraction, de multiplication et de division.

- Pour les deux étapes précédentes, notez que vous devez créer l’interface abstraite et le jeton d’injection requis.
- Implémentez une classe de calculatrice qui utilise ces opérateurs via InversifyJS. Ce fichier représente votre application principale. Vous devrez peut-être mapper toutes les parties d’expression et les analyser. Pour cela, vous pouvez vous référer au dossier maths.ts placé dans le dossier src/utils, qui crée et exporte deux de ces fonctions - tryParseNumberString et tryParseOperatorSymbol.
- Configurez le conteneur IoC (présent dans le dossier src/ioc.config.tsx) afin que Calculator puisse recevoir AddOperator, SubtractOperator, et ainsi de suite lorsqu'il demande TYPES.AddOperator, Par exemple
- Vous pouvez simplifier le ioc.config.ts davantage en utilisant des barils. Le code pour cela se trouve dans le fichier operator/index.ts. Vous pouvez utiliser le code du fichier susmentionné pour configurer puis simplifier votre conteneur IoC.
- Créer le fichier main.ts qui lancera votre calculatrice.

- Après avoir résolu les étapes précédentes, le résultat attendu devrait ressembler à ce qui suit :

    result is 150
