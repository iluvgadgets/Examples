import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  @Input() event: any;

  something: any = 'well i never!';

  logFoo() {
    console.log('foo!');
  }

  formatPrice() {
    const greater600 = this.event && this.event.price >= 600;
    const greater800 = this.event && this.event.price >= 800;
    return {red: greater600, bold: greater800};
  }
}
