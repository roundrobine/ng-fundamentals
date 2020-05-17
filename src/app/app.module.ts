import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { EventListComponent } from "./events/events-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
