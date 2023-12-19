## Activité 5.01 : Création d'un composant de gestion des utilisateurs à l'aide d'interfaces

Imaginez que vous travaillez sur une application Web et que vous êtes chargé de créer un composant de gestion des utilisateurs. Vous devez créer une classe pour encapsuler les aspects de gestion des utilisateurs de l'application et, comme vous êtes un bon développeur, vous utiliserez des interfaces pour garantir que votre code est facile à réutiliser et à prendre en charge. Pour cette activité, vous pouvez supposer que votre interface utilisateur aura au moins trois propriétés : email, token et loginAt. Ces propriétés concernent l'identifiant de messagerie d'un utilisateur, le jeton (token) Web et l'heure sur le système à laquelle l'utilisateur s'est connecté.

### Voici quelques étapes qui vous aideront à réaliser cette activité :

- Créez une interface d'objet utilisateur avec les propriétés suivantes : email : string, loginAt : number, et token: string. Les propriétés loginAt et token doivent être des propriétés facultatives.
- Construire une interface de classe avec une propriété globale, user et utilisez l'interface créée à l'étape précédente pour appliquer les règles d'objet utilisateur.

- Vous devez définir une méthode getUser qui renvoie l'objet user, puis utilisez l'interface pour vous assurer que l'objet de retour est un objet utilisateur. Enfin, définissez une méthode login qui prend un objet user et password(type string) comme arguments. Utilisez l'interface objet user comme type d'argument user .
- Déclarez une classe appelée UserClass qui implémente l'interface de classe de l'étape précédente. Votre méthode de connexion doit attribuer le nom de la fonction locale user à la propriété de l'utilisateur global et renvoie l'utilisateur global. La méthode getUser doit renvoyer l’utilisateur global.

- Créez une instance de votre classe déclarée à l'étape 2 .
- Créer une instance d'objet user.
- Tester en console vos méthodes pour vous assurer qu’elles fonctionnent comme prévu.

Le résultat attendu est le suivant :

{ email: 'home@home.com', loginAt: 1614068072515, token: '123456' }
{ email: 'home@home.com', loginAt: 1614068072515, token: '123456' }