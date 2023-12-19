## Activité 6.02 - Type Union

Une entreprise de logistique vous a demandé de développer une fonctionnalité sur son site Web qui permettra aux clients de choisir la manière dont ils souhaitent que leurs colis soient expédiés – par voie terrestre ou aérienne. Vous avez décidé d'utiliser les types d'union pour y parvenir. Vous pouvez créer votre propre type d'union appelé ComboPack, qui peut être soit le type LandPack ou AirPack. Vous pouvez ajouter à vos types de packages toutes les propriétés qui, selon vous, seront communes à un package. Pensez également à utiliser un type littéral pour identifier votre colis comme étant aérien ou terrestre, ainsi qu'une propriété d'étiquette qui sera facultative. Vous devrez ensuite construire une classe pour traiter vos packages. Votre classe doit avoir une méthode pour identifier votre type de package qui prend les arguments du type ComboPack et utilise votre propriété littérale pour identifier le type de package et ajouter l'étiquette correcte, air cargo ou land cargo.

Voici quelques étapes qui vous aideront à réaliser cette activité :

- Construire un type LandPack Et un type AirPack. Assurez-vous d'avoir un littéral pour identifier le type de package.
- Construire un type d'union, ComboPack, qui peut être LandPack ou AirPack.
- Faire une classe Shipping pour traiter vos colis. Assurez-vous d'utiliser votre littéral pour identifier vos types de packages et modifiez votre package avec l'étiquette correcte pour son type.
- Créez deux objets package des types AirPack et LandPack.
- Instanciez votre classe Shipping, traitez vos nouveaux objets et consolez les objets modifiés. 