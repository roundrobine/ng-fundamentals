import { RouterModule } from "@angular/router";
import { ToastrService } from "./common/toastr.service";
import { NavBarComponent } from "./nav/nav.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { routes } from "./routes";
import { ErrorPageComponent } from "./errors/error-page/error-page.component";
import {
  EventsListResolver,
  EventRouteActivator,
  EventService,
  EventThumbnailComponent,
  EventListComponent,
  EventDetailsComponent,
  CreateEventComponent,
} from "./events/index";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorPageComponent,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState },
    EventsListResolver,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event, do you really want to cancel?"
    );
  }
  return true;
}
