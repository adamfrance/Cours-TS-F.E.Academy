## Activité 5.02 : Création d'un prototype d'application Web pour une salle d'exposition de véhicules à l'aide de l'héritage

Vous êtes chargé de créer une application Web pour une salle d'exposition de véhicules. Vous avez décidé d'utiliser vos nouvelles compétences en matière d'héritage pour créer les classes et les classes enfants qui façonneront les objets véhicules dont nous aurons besoin pour notre application complète. A noter que le showroom dispose de plusieurs types de véhicules. Cependant, tous ces types auront des propriétés communes. Par exemple, tous les véhicules ont des roues et une carrosserie. Vous pouvez utiliser ces informations pour créer votre classe de base.

### Les étapes suivantes vous aideront à réaliser cette activité :

- Créez une classe parent qui contiendra toutes les méthodes et propriétés courantes d'un véhicule de base. - Définissez une méthode constructeur qui vous permet d'initialiser les propriétés de base de cette classe et ajoutez une méthode qui renvoie vos propriétés sous forme d'objet.
- Ajoutez un modificateur d'accès aux propriétés et aux méthodes de classe auxquelles vous souhaitez contrôler l'accès si nécessaire.
- Dérivez deux classes enfants de votre classe parent qui sont des types de véhicules, par exemple : Caret Truck.
- Remplacez votre constructeur pour ajouter des propriétés uniques à vos classes enfants en fonction du type de véhicule.
- Dérivez une classe de l'une des classes enfants créées à l'étape 3 , par exemple : Suv, qui aura certaines des propriétés qu'un camion pourrait avoir, il serait donc logique d'étendre Truck.
- Instanciez vos classes enfants et ensemencez-les avec des données.
- Tester en console votre instance de classe enfant.
    
Le résultat attendu est le suivant :

    Car { name: 'blueBird', wheels: 4, bodyType: 'sedan', rideHeight: 14 }
    Truck { name: 'blueBird', wheels: 4, bodyType: 'sedan', offRoad: true }
    Suv {
      name: 'xtrail',
      wheels: 4,
      bodyType: 'box',
      offRoad: true,
      roofRack: true,
      thirdRow: true
    }

### Solution: 

Créez une classe parent qui contiendra toutes les méthodes et propriétés courantes d'un véhicule de base, définissez une méthode constructeur qui vous permet d'initialiser les propriétés de base de cette classe et ajoutez une méthode qui renvoie vos propriétés en tant qu'objet. Si nécessaire, ajoutez un modificateur d'accès aux propriétés et aux méthodes de classe auxquelles vous souhaitez contrôler l'accès :

class Motor {
    private name: string
    wheels: number
    bodyType: string
    constructor(name: string, wheels: number, bodyType: string) {
        this.name = name
        this.wheels = wheels
        this.bodyType = bodyType
    }
    protected getName(): string {
        return this.name
    }
    buildMotor() {
        return {
            wheels: this.wheels,
            bodyType: this.bodyType,
            name: this.name
        }
    }
}

Dérivez deux classes enfants de votre classe parent qui sont des types de véhicules, par exemple : Car et Truck. Remplacez votre constructeur pour ajouter des propriétés uniques à vos classes enfants en fonction du type de véhicules :

class Car extends Motor {
    rideHeight: number
    constructor(name: string, wheels: number, bodyType: string, rideHeight: number) {
        super(name, wheels, bodyType)
        this.rideHeight = rideHeight
    }
    _buildMotor() {
        return {
            ...super.buildMotor,
            rideHeight: this.rideHeight
        }
    }
}
class Truck extends Motor {
    offRoad: boolean
    constructor(name: string, wheels: number, bodyType: string, offRoad: boolean) {
        super(name, wheels, bodyType)
        this.offRoad = offRoad
    }
    _buildMotor() {
        return {
            wheels: this.wheels,
            bodyType: this.bodyType,
            offRoad: this.offRoad
        }
    }
}

Dérivez une classe de l'une des classes enfants créées à l'étape 3 , par exemple : Suv, qui contiendra certaines des choses qu'un camion pourrait avoir, il serait donc logique d'étendre Truck:

class Suv extends Truck {
    roofRack: boolean
    thirdRow: boolean
    constructor(name: string, wheels: number, bodyType: string, 
        offRoad: boolean, roofRack: boolean, thirdRow: boolean) {
        super(name, wheels, bodyType, offRoad)
        this.roofRack = roofRack;
        this.thirdRow = thirdRow
    }
}

Instanciez votre classe enfant :

const car: Car = new Car('blueBird', 4, 'sedan', 14)
const truck: Truck = new Truck('blueBird', 4, 'sedan', true)
const suv: Suv = new Suv('xtrail', 4, 'box', true, true, true)

Console notre instance de classe enfant :

console.log(car)
console.log(truck)
console.log(suv)

Vous obtiendrez le résultat suivant :

Car { name: 'blueBird', wheels: 4, bodyType: 'sedan', rideHeight: 14 }
Truck { name: 'blueBird', wheels: 4, bodyType: 'sedan', offRoad: true }
Suv {
  name: 'xtrail',
  wheels: 4,
  bodyType: 'box',
  offRoad: true,
  roofRack: true,
  thirdRow: true
}

Dans cette activité, vous avez créé le strict minimum de classes dont nous avons besoin pour l'application Web. Nous avons montré comment nous pouvons créer de la complexité, réutiliser et étendre le code d'application avec l'héritage dans TypeScript. 