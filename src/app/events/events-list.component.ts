import { ToastrService } from "./../common/toastr.service";
import { EventService } from "./shared/event.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "events-list",
  templateUrl: `./events-list.component.html`,
})
export class EventListComponent implements OnInit {
  events: any[];
  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
