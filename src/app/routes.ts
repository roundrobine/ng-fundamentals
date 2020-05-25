import { ErrorPageComponent } from "./errors/error-page/error-page.component";
import { Routes } from "@angular/router";

import {
  EventsListResolver,
  EventRouteActivator,
  CreateEventComponent,
  EventDetailsComponent,
  EventListComponent,
} from "./events/index";

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
