import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { RouterModule } from "@angular/router";
import { ToastrService } from "./common/toastr.service";
import { EventService } from "./events/shared/event.service";
import { NavBarComponent } from "./nav/nav.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { EventListComponent } from "./events/events-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { routes } from "./routes";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { ErrorPageComponent } from "./errors/error-page/error-page.component";

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
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
