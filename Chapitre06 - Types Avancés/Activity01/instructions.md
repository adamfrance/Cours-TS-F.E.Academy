## Activité 6.01 : Type d'intersection

Imaginez que vous êtes un développeur travaillant sur une fonctionnalité de création de camions pour un site Web de camions personnalisé. Vous devrez permettre aux clients qui viennent sur le site de construire une variété de types de camions. À cette fin, vous devez créer votre propre type d'intersection, PickUptruck, en combinant deux types, Motor et Truck. Vous pouvez ensuite utiliser votre nouveau type, PickUpTruck, avec une fonction qui renvoie le type et valide son entrée avec le type intersection PickUpTruck.


#### Voici quelques étapes qui vous aideront à réaliser cette activité :

    Créer un type Motor, qui hébergera certaines propriétés courantes que vous pourrez réutiliser seules ou en combinaison avec d’autres types pour décrire un objet véhicule. Vous pouvez utiliser les propriétés suivantes comme point de départ : color, doors, wheels, et fourWheelDrive.
    Créer un type Truck avec des propriétés communes à un camion, par exemple, doubleCab et winch.
    Croisez les deux types pour créer un type PickUpTruck.
    Construire une fonction TruckBuilder qui renvoie notre type PickUpTruck et prend également PickUpTruck comme argument.
    Console le retour de fonction.
    Une fois l’activité terminée, vous devriez obtenir le résultat suivant :

    {
      color: 'red',
      doors: 4,
      doubleCab: true,
      wheels: 4,
      fourWheelDrive: true,
      winch: true
    }