# Activity 3.01

1.  `npm i`.
2. Editer `bookings.ts` et `flights.ts` et implementer la logique.
3.  `npx ts-node index.ts`.


En tant que développeur dans une start-up de réservation en ligne, vous devez mettre en place un système de gestion des réservations aériennes. L'architecture de ce système a déjà été décidée. Il y aura un système de gestion des vols et de la disponibilité des sièges sur ceux-ci ainsi qu'un système de gestion des réservations. Les utilisateurs interagiront directement avec le système de réservation et celui-ci, à son tour, recherchera et mettra à jour les informations sur les vols.

Afin de maintenir cette activité à une taille gérable, nous allons faire abstraction d'un certain nombre de choses, telles que les informations sur les clients, les paiements, les dates de vols et même la ville d'origine. Pour comprendre le problème que nous devons résoudre, il peut être très utile de créer un diagramme décrivant les flux que nous devons mettre en œuvre. Le diagramme suivant montre le flux de travail attendu pour notre utilisateur : 

(voir image jpeg)

Voici comment se déroule le programme :

    Obtenez une liste de vols parmi lesquels choisir.
    Commencez une réservation avec l’un de ces vols.
    Payez le vol.
    Complétez la réservation avec les sièges réservés sur le vol.

Comme le montre le diagramme, l'utilisateur interagira avec deux systèmes différents, un système de réservations et un système de vols. Dans la plupart des scénarios, l'utilisateur interagit avec le système de réservation, mais il accède directement au système Vols pour rechercher des vols.

Dans cette activité, ces systèmes peuvent être représentés par un fichier bookings.ts et un fichier flights.ts, qui sont deux modules TypeScript. Pour terminer l'activité, implémentez ces deux modules dans TypeScript. Voici quelques étapes pour vous aider :

- Étant donné que l'utilisateur et le système de réservation dépendent du système de vols, commencez par les vols : flights.ts. L'activité étant simplifiée, on peut simplement renvoyer une liste de destinations lorsque l'utilisateur souhaite accéder aux vols. Pour permettre l'accès au module bookings.ts, nous voudrons utiliser le mot clé export sur une fonction.
- Bien que l'utilisateur ait déjà récupéré les vols, nous devons vérifier la disponibilité avant de lancer une réservation. En effet, notre système aura de nombreux utilisateurs et la disponibilité peut changer de minute en minute. Exposez une fonction pour vérifier la disponibilité et une autre pour réserver des sièges pendant que la transaction est terminée.
- L'étape de traitement du paiement fait vraiment allusion à un troisième système de paiement, mais nous n'inclurons pas ce système dans cette activité, il suffit donc de marquer la réservation comme payée lorsque l'utilisateur arrive à l'étape de paiement. Le système Vols n'a pas besoin de connaître le statut du paiement, car celui-ci est géré par Bookings.
- Une fois la réservation terminée, les places réservées sont converties en places réservées. Notre réservation est finalisée et les sièges ne sont plus disponibles sur le vol.
    Un résultat typique pour une telle activité ressemblerait à ceci :

    Booked to Lagos {
      bookingNumber: 1,
      flight: {
        destination: 'Lagos',
        flightNumber: 1,
        seatsHeld: 0,
        seatsRemaining: 29,
        time: '5:30'
      },
      paid: true,
      seatsHeld: 0,
      seatsReserved: 1
    //...

### Démarches à suivre : 

Solution:

    Commencez par les stubs fournis dans les exemples de code. Nous avons trois fichiers : index.ts, bookings.ts, et flights.ts. Le fichier index.ts est un peu abstrait et ne représentera que certaines des transactions que nous envoyons dans notre système. bookings.ts gère les activités orientées utilisateur liées à la gestion d'une réservation, et flights.ts est le back-office qui remplit les vols et s'assure que tout le monde a un siège.
    Le fichier index.ts ne changera pas à moins que vous ayez envie de le modifier et d'ajouter de nouveaux scénarios. Exécutons-le sans ajouter de code :

    npx ts-node index.ts Not implemented!

Nous avons donc du travail à faire. Plusieurs fonctions ne sont pas encore implémentées. Commençons par regarder flights.ts. Il y a là une implémentation partielle car nous avons une interface appelée Flights qui décrit les attributs d'un vol, une liste des vols disponibles implémentant cette interface, et même une méthode pour récupérer les vols, appelée getDestinations. Nous devons mettre en œuvre une logique pour vérifier si le nombre de sièges que nous souhaitons réserver est toujours disponible, une logique qui peut conserver des sièges pendant que nous confirmons une réservation et une logique qui convertit les sièges détenus en sièges réservés une fois notre paiement traité.
Pour vérifier la disponibilité, nous devons voir si le nombre de sièges que nous demandons dépasse le nombre de sièges restants tout en gardant en réserve les sièges détenus. Nous pouvons exprimer cela comme seatsRequested <= seatsRemaining - seatsHeld, qui est une expression booléenne qui peut être renvoyée par la fonction. Cela peut être écrit sous la forme d'une fonction fléchée dans le flights.tsdéposer:

export const checkAvailability = (
  flight: Flight,
  seatsRequested: number
): boolean => seatsRequested <= flight.seatsRemaining - flight.seatsHeld;

La fonction holdSeats doit confirmer que les sièges demandés sont disponibles et les conserver s’ils le sont. S'il ne reste pas assez de sièges, nous devons générer une erreur et interrompre le flux :

export const holdSeats = (flight: Flight, seatsRequested: number): Flight => {
  if (flight.seatsRemaining - flight.seatsHeld < seatsRequested) {
    throw new Error('Not enough seats remaining!');
  }
  flight.seatsHeld += seatsRequested;
  return flight;
};

Pour compléter flights.ts, nous avons reserveSeats. Cette fonction fonctionne de la même manière que holdSeats, mais il confirme que les sièges que nous souhaitons réserver ont été occupés, puis les convertit en sièges réservés en augmentant la propriété seatsHeld et réduire la propriété seatsRemaining du même montant :

export const reserveSeats = (
  flight: Flight,
  seatsRequested: number
): Flight => {
  if (flight.seatsHeld < seatsRequested) {
    throw new Error('Seats were not held!');
  }
  flight.seatsHeld -= seatsRequested;
  flight.seatsRemaining -= seatsRequested;
  return flight;
};

Cela devrait le faire pour flights.ts. Cependant, notre programme ne fonctionnera toujours pas tant que nous n'aurons pas mis en œuvre bookings.ts.
Tout d’abord, nous allons utiliser un modèle d’usine pour créer des réservations. Cela signifie que nous aurons une fonction qui renvoie une fonction pour créer des réservations. Nous utiliserons le curry pour créer une fermeture afin de pouvoir initialiser la fonction createBooking avec bookingNumber afin de donner à chaque réservation un identifiant unique. La fonction pourrait ressembler à ceci :

const bookingsFactory = (bookingNumber: number) => (
  flight: Flight,
  seatsHeld: number
): Booking => ({
  bookingNumber: bookingNumber++,
  flight,
  paid: false,
  seatsHeld,
  seatsReserved: 0,
});

Notre fonction prend bookingNumber comme argument pour initialiser cette valeur, puis incrémente le nombre à chaque fois qu'il crée une nouvelle réservation. Nous attribuons des valeurs par défaut à la réservation pour confirmer à l'interface Booking déjà fournie dans le module.
Pour appeler cette factory et obtenir un createBooking avec bookingNumber déjà intégré, nous pouvons simplement écrire ce qui suit :

const createBooking = bookingsFactory(1);

Nous devons encore écrire des fonctions pour démarrer le processus de réservation, gérer le paiement et finaliser la réservation, réservant ainsi les places sur un vol. Pour commencer la réservation, nous devons vérifier la disponibilité sur le vol que nous avons choisi en fonction du nombre de sièges que nous demandons. Si cela réussit, nous pouvons créer la réservation et conserver les sièges. Dans le cas contraire, nous pouvons générer une erreur pour alerter l'utilisateur du fait que la réservation ne peut pas être complétée :

  export const startBooking = (
  flight: Flight,
  seatsRequested: number
): Booking => {
  if (checkAvailability(flight, seatsRequested)) {
    holdSeats(flight, seatsRequested);
    return createBooking(flight, seatsRequested);
  }
  throw new Error('Booking not available!');
};

Afin de vérifier la disponibilité des vols et de réserver des sièges, nous devons importer ces fonctions depuis flights.ts. Cela a déjà été fait au sommet du module bookings.ts. Le mot-clé export est utilisé dans ces modules pour rendre les fonctions disponibles pour d'autres modules. Certaines fonctions n'ont pas le mot-clé export, et ne peut donc être invoqué qu’à partir du module, ce qui les rend effectivement privés.
On va tricher un peu avec notre fonction processPayment puisque nous ne mettons pas en œuvre de système de paiement. Nous marquerons simplement la réservation comme payée et la retournerons :

export const processPayment = (booking: Booking): Booking => {
  booking.paid = true;
  return booking;
};

Pour finaliser la réservation, nous appelons reserveSeatsdans le flightsmodule puis mettez à jour nos décomptes :

export const completeBooking = (booking: Booking): Booking => {
reserveSeats(booking.flight, booking.seatsHeld);
booking.seatsReserved = booking.seatsHeld;
booking.seatsHeld = 0;
return booking;
};

Avec toutes les fonctions implémentées, nous pouvons invoquer à nouveau notre programme et voir le résultat :

npx ts-node index.ts
Booked to Lagos {
  bookingNumber: 1,
  flight: {
    destination: 'Lagos',
    flightNumber: 1,
    seatsHeld: 0,
    seatsRemaining: 29,
    time: '5:30'
  },
  paid: true,
  seatsHeld: 0,
  seatsReserved: 1
}
//...
Istanbul flight {
  destination: 'Istanbul',
  flightNumber: 7,
  seatsHeld: 0,
  seatsRemaining: 0,
  time: '14:30'
}
Booking not available!