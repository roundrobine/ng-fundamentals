import { EventService } from "./shared/event.service";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Resolve } from "@angular/router";

@Injectable({ providedIn: "root" })
export class EventsListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve() {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
