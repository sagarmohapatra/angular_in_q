import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() fromParent: any;
  @Output() sendData = new EventEmitter<any>();
  store: any = 'i am from child';
  send() {
    this.sendData.emit(this.store);
  }
}
