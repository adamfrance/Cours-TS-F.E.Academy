## Activité 13.01 : Refactorisation des promesses d'utilisation chaînées en attente

Dans cette activité, nous allons refactoriser une fonction qui enchaîne les promesses d'utilisation await. Vous disposez d'un programme de démarrage destiné à simuler la création d'éléments DOM pour un site Web et à les restituer les uns après les autres. En réalité, la plupart des sites souhaitent effectuer un rendu en parallèle, mais il est possible que les informations d'un composant éclairent le rendu d'un autre. C'est suffisant à titre d'exemple dans tous les cas :

- Commencez par exécuter le programme tel quel avec npx ts-node src/refactor.ts. Vous recevrez chaque message dans l'ordre.
- Maintenant, refactorisez la fonction renderAll à utiliser async/ await. Vous ne devriez pas avoir à toucher à d’autres parties du code pour que cela fonctionne. Une fois votre refactorisation terminée, exécutez à nouveau le programme et vérifiez que le résultat n'a pas changé.

Le code du programme de démarrage ( refactor.ts) est comme suit:

export class El {
  constructor(private name: string) {}
  render = () => {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(`${this.name} is resolved`),
        Math.random() * 1000
      )
    );
  };
}
const e1 = new El('header');
const e2 = new El('body');
const e3 = new El('footer');
const renderAll = () => {
  e1.render().then((msg1) => {
    console.log(msg1);
    e2.render().then((msg2) => {
      console.log(msg2);
      e3.render().then((msg3) => {
        console.log(msg3);
      });
    });
  });
};
renderAll();

Une fois le programme exécuté, vous devriez obtenir le résultat suivant :

header is resolved
body is resolved
footer is resolved

