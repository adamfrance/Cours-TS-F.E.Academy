## Activité 9.01 : Création d'un type DeepPartial<T>

Dans cette activité, nous utiliserons les concepts appris dans ce chapitre : les génériques, les types conditionnels et les infer : pour créer un type DeepPartial<T>. Ce type est comme le type Partial<T>. Mais nous travaillerons de manière récursive et rendrons chaque propriété de l'objet facultative, de manière récursive.

Cela vous permettra de saisir correctement les variables, etc. afin que toutes leurs propriétés, à n'importe quel niveau, puissent être facultatives. Par exemple, le serveur REST servira les ressources et permettra de les modifier à l'aide d'une requête PATCH, qui doit obtenir une structure partielle de la ressource d'origine, à modifier.


- Pour créer ce type, nous devrons traiter quelques cas :

    Primitives – les chaînes, nombres et autres primitives, en plus des dates, ne peuvent pas être appliquées Partial. Donc DeepPartial<string> === string.
    Pour les constructions comme les objets, Array, Set, et Map, nous voulons « accéder » à la construction et appliquer DeepPartial à leurs valeurs.
    Pour tout le reste, nous voulons simplement postuler Partial.

- Effectuez les étapes suivantes pour mettre en œuvre cette activité :

    Créer un type PartialPrimitive.
    Définir une base du type DeepPartial<T> qui peut gérer les primitives et les objets au niveau supérieur.
    Ajoutez la prise en charge des tableaux en définissant un type DeepPartialArray<T>  et ajoutez une gestion pour cela dans notre type DeepPartial<T>.
    Ajoutez la prise en charge des ensembles en définissant un type DeepPartialSet<T>  et ajoutez une gestion pour cela dans notre type DeepPartial<T>.
    Ajoutez la prise en charge des cartes en définissant un type DeepPartialMap<T>  et ajoutez une gestion pour cela dans notre type DeepPartial<T>.
    Ajoutez la prise en charge des objets simples, en appliquant le modificateur de propriété sur chacune de leurs propriétés, et en passant leurs valeurs enveloppées dans DeepReadonly.