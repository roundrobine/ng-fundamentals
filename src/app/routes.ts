import { EventsListResolver } from "./events/events-list-resolver.service";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { ErrorPageComponent } from "./errors/error-page/error-page.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventListComponent } from "./events/events-list.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "events",
    component: EventListComponent,
    resolve: { events: EventsListResolver },
  },
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"],
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "404", component: ErrorPageComponent },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
];
