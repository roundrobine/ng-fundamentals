import { EventService } from "./shared/event.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "events-list",
  templateUrl: `./events-list.component.html`,
})
export class EventListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
