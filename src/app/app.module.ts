import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventContainerComponent } from './events/event-container.component';
import { EventsListComponent } from './events/events-list.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventsService} from './services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    EventContainerComponent,
    EventsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
