import { CreateEventComponent } from "./events/create-event/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventListComponent } from "./events/events-list.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "events", component: EventListComponent },
  { path: "events/new", component: CreateEventComponent },
  { path: "events/:id", component: EventDetailsComponent },
  { path: "", redirectTo: "/events", pathMatch: "full" },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];
