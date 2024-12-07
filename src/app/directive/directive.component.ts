import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent {
  check: any = true;
  change() {
    this.check = !this.check;
  }
  data: any = true;
  changes(){
    this.data=!this.data
  }
}
