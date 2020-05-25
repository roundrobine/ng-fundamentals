import { ActivatedRoute } from "@angular/router";
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
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
