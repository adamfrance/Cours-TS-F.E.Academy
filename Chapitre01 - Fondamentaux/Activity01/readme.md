### Activité 1.01 : Créer une bibliothèque pour travailler avec des chaînes de caractères

Votre tâche consiste à créer une série de fonctions simples qui vous aideront à effectuer certaines opérations courantes sur les chaînes de caractères. Certaines opérations sont déjà prises en charge dans la bibliothèque JavaScript standard, mais vous les utiliserez comme un exercice d'apprentissage pratique, à la fois des composants internes de JavaScript et de TypeScript en tant que langage. Notre bibliothèque aura les fonctions suivantes :

    toTitleCase: Cela traitera une chaîne et mettra en majuscule la première lettre de chaque mot mais mettra toutes les autres lettres en minuscules.

    Les cas de test pour cette fonction sont les suivants :

    "war AND peace" => "War And Peace"
    "Catcher in the Rye" => "Catcher In The Rye"
    "tO kILL A mOCKINGBIRD" => "To Kill A MockingBird"


countWords: Cela comptera le nombre de mots séparés dans une chaîne. Les mots sont délimités par des espaces, des tirets ( -), ou des traits de soulignement ( \_).

Les cas de test pour cette fonction sont les suivants :

"War and Peace" => 3
"catcher-in-the-rye" => 4
"for_whom the-bell-tolls" => 5

toWords: Cela renverra tous les mots contenus dans une chaîne. Les mots sont délimités par des espaces, des tirets ( -), ou des traits de soulignement ( \_).

Les cas de test pour cette fonction sont les suivants :

"War and Peace" => [War, and, peace]
"catcher-in-the-rye" => [catcher, in, the, rye]
"for_whom the-bell-tolls"=> [for, whom, the, bell, tolls]

repeat: Cela prendra une chaîne et un nombre et renverra cette même chaîne répétée autant de fois.

Les cas de test pour cette fonction sont les suivants :

"War", 3 => "WarWarWar"
"rye", 1 => "rye"
"bell", 0 => ""

isAlpha: Cela reviendra truesi la chaîne ne contient que des caractères alphabétiques (c'est-à-dire des lettres). Les cas de test pour cette fonction sont les suivants :

"War and Peace" => false
"Atonement" => true
"1Q84" => false

isBlank: Cela reviendra truesi la chaîne est vide, c'est-à-dire qu'elle est constituée uniquement de caractères d'espacement.

Les cas de test pour cette fonction sont les suivants :

"War and Peace" => false
" " => true
"" => true

Lors de l'écriture des fonctions, assurez-vous de penser aux types de paramètres et aux types de valeurs de retour.

Voici quelques étapes pour vous aider à créer les fonctions précédentes (notez qu'il existe plusieurs façons d'implémenter chacune des fonctions, considérez donc ces étapes comme des suggestions) :

- Création de la fonction toTitleCase  : Afin de changer chaque mot, nous devrons d'abord récupérer tous les mots. Vous pouvez utiliser la fonction split  pour transformer une seule chaîne en un tableau de mots. Ensuite, nous devrons slice séparer la première lettre du reste du mot. Nous pouvons utiliser le toLowerCaseet toUpperCaseméthodes pour mettre quelque chose en minuscule et en majuscule, respectivement. Après avoir mis tous les mots correctement dans la casse, nous pouvons utiliser le joinméthode array pour transformer un tableau de chaînes de caractères en une seule grande chaîne.
    
- Création de la fonction countWords : Afin d'obtenir les mots, nous pouvons diviser la chaîne d'origine en toute occurrence de l'un des trois délimiteurs ( " ", "_", et "-"). Heureusement, la fonction split peut prendre une expression régulière comme paramètre, que nous pouvons utiliser à notre avantage. Une fois que nous avons les mots dans un tableau, il suffit de compter les éléments.
    
- Création de la fonction towards : Cette méthode peut utiliser la même approche que la précédente. Au lieu de compter les mots, il nous suffira de les rendre. Prenez note du type de retour de cette méthode.

- Création de la fonction repeat : Créez un tableau avec la longueur requise (en utilisant le constructeur Array), et définissez chaque élément sur la valeur d'entrée (en utilisant la méthode fill). Après cela, vous pouvez utiliser la méthode join du tableau pour joindre les valeurs en une seule longue chaîne.

- Création de la fonction isAlpha : nous pouvons concevoir une expression régulière qui testera cela, mais nous pouvons également diviser la chaîne en caractères uniques, en utilisant la chaîne splitméthode. Une fois que nous avons le tableau de caractères, nous pouvons utiliser la fonction map pour transformer tous les caractères en minuscules. Nous pouvons ensuite utiliser la méthode filter pour renvoyer uniquement les caractères qui ne sont pas compris entre « a » et « z ». Si nous n'avons pas de tels caractères, alors l'entrée ne contient que des lettres, nous devons donc renvoyer true. Sinon, nous devrions retourner false.
    
- Création de la fonction isBlank : une façon de créer une telle fonction consiste à tester à plusieurs reprises si le premier caractère est vide, et si c'est le cas, à le supprimer (la boucle while fonctionne mieux pour cela). Cette boucle s'arrêtera soit sur les premiers caractères non vides, soit lorsqu'elle manquera de premiers éléments, c'est-à-dire lorsque l'entrée sera vide. Dans le premier cas, la chaîne n'est pas vide, il faut donc retourner false; sinon, nous devrions revenir true.
