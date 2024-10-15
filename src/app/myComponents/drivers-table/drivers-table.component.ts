import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers-table',
  standalone: true,
  imports: [],
  templateUrl: './drivers-table.component.html',
  styleUrl: './drivers-table.component.css'
})
export class DriversTableComponent {

  driver1 = {
    // givenImg: 'img/verstappe1.jpg',
    givenFullName: "Max Verstappen",
    dateofBirth: "30/09/1997",
    nationality: "Netherlands",
    placeofBirth: "Hasselt, Belgium",
    points: 2917.5,
    grandPrixEntered: 203
  }

  driver2 = {
    // givenImg: 'img/verstappe1.jpg',
    givenFullName: "Lando Norris",
    dateofBirth: "13/11/1999",
    nationality: "United Kingdom",
    placeofBirth: "Bristol, England",
    points: 912.0,
    grandPrixEntered: 122
  }

  driver3 = {
    // givenImg: 'img/verstappe1.jpg',
    givenFullName: "Charles Leclerc",
    dateofBirth: "16/10/1997",
    nationality: "Monaco",
    placeofBirth: "Monte Carlo, Monaco",
    points: 1319.0,
    grandPrixEntered: 143
  }

  driver4 = {
    givenFullName: "Oscar Piastri",
    dateofBirth: "06/04/2001",
    nationality: "Australia",
    placeofBirth: "Melbourne, Victoria",
    points: 334.0,
    grandPrixEntered: 40
  }

  driver5 = {
    givenFullName: "Carlos Sainz",
    dateofBirth: "01/09/1994",
    nationality: "Spain",
    placeofBirth: "Madrid, Spain",
    points: 1172.5,
    grandPrixEntered: 202
  }

  driver6 = {
    givenFullName: "Lewis Hamilton",
    dateofBirth: "07/01/1985",
    nationality: "United Kingdom",
    placeofBirth: "Stevenage, England",
    points: 4813.5,
    grandPrixEntered: 350
  }

  driver7 = {
    givenFullName: "Sergio Perez",
    dateofBirth: "26/01/1990",
    nationality: "Mexico",
    placeofBirth: "Guadalajara, Mexico",
    points: 1630.0,
    grandPrixEntered: 276
  }

  driver8 = {
    givenFullName: "Fernando Alonso",
    dateofBirth: "29/07/1981",
    nationality: "Spain",
    placeofBirth: "Oviedo, Spain",
    points: 2329.0,
    grandPrixEntered: 398
  }

  driver9 = {
    givenFullName: "Nico Hulkenberg",
    dateofBirth: "19/08/1987",
    nationality: "Germany",
    placeofBirth: "Emmerich am Rhein, Germany",
    points: 554.0,
    grandPrixEntered: 224
  }

  driver10 = {
    givenFullName: "Lance Stroll",
    dateofBirth: "29/10/1998",
    nationality: "Canada",
    placeofBirth: "Montreal, Canada",
    points: 292.0,
    grandPrixEntered: 161
  }

  driver11 = {
    givenFullName: "Yuki Tsunoda",
    dateofBirth: "11/05/2000",
    nationality: "Japan",
    placeofBirth: "Sagamihara, Japan",
    points: 83.0,
    grandPrixEntered: 84
  }

  driver12 = {
    givenFullName: "Alexander Albon",
    dateofBirth: "23/03/1996",
    nationality: "Thailand",
    placeofBirth: "London, England",
    points: 240.0,
    grandPrixEntered: 99
  }

  driver13 = {
    givenFullName: "Daniel Ricciardo",
    dateofBirth: "01/07/1989",
    nationality: "Australia",
    placeofBirth: "Perth, Australia",
    points: 1329.0,
    grandPrixEntered: 257
  }

  driver14 = {
    givenFullName: "Pierre Gasly",
    dateofBirth: "07/02/1996",
    nationality: "France",
    placeofBirth: "Rouen, France",
    points: 402.0,
    grandPrixEntered: 148
  }

  driver15 = {
    givenFullName: "Oliver Bearman",
    dateofBirth: "08/05/2005",
    nationality: "United Kingdom",
    placeofBirth: "Chelmsford, England",
    points: 7.0,
    grandPrixEntered: 2
  }

  driver16 = {
    givenFullName: "Kevin Magnussen",
    dateofBirth: "08/05/2005",
    nationality: "Denmark",
    placeofBirth: "Roskilde, Denmark",
    points: 192.0,
    grandPrixEntered: 181
  }

  driver17 = {
    givenFullName: "Esteban Ocon",
    dateofBirth: "17/09/1996",
    nationality: "France",
    placeofBirth: "Évreux, Normandy",
    points: 427.0,
    grandPrixEntered: 151
  }

  driver18 = {
    givenFullName: "Franco Colapinto",
    dateofBirth: "27/05/2003",
    nationality: "Argentina",
    placeofBirth: "Buenos Aires, Argentina",
    points: 4.0,
    grandPrixEntered: 3
  }

  driver19 = {
    givenFullName: "Zhou Guanyu",
    dateofBirth: "30/05/1999",
    nationality: "China",
    placeofBirth: "Shanghai, China",
    points: 12.0,
    grandPrixEntered: 62
  }

}
