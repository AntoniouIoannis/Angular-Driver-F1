import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DriversTableComponent } from "./myComponents/drivers-table/drivers-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DriversTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'driverF1';

  driverF1 = {
    // givenImg: "img/verstappen1.jpg",
    givenFullName: "George Russell",
    dateofBirth: "15/02/1998",
    nationality: "United Kingdom",
    placeofBirth: "King's Lynn, England",
    points: 624.0,
    grandPrixEntered: 122
  };
}
