import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  templateUrl: `./events-list.component.html`,
})
export class EventListComponent {
  event = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2036",
    time: "10:00 AM",
    price: 599.99,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "Kej na Revolucijata 3/A",
      city: "Berovo",
      country: "North Macedonia",
    },
  };
}
