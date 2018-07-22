import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-container',
  template: `<div class="row">
  <div class="col-md-4" *ngFor="let event of events">
    <app-events-list #thumbnail  [event]="event"></app-events-list>
    <button (click)="thumbnail.logFoo()">Call the event via a variable</button>
    <div>
  <div>`,
  styles: ['div {border: 2px solid #ccc} ']
})
export class EventContainerComponent implements OnInit {


  events = getEvents();


  constructor() { }

  ngOnInit() {
  }

}
