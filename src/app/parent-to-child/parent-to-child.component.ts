import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.scss']
})
export class ParentToChildComponent {
parentTochild:any="i am from parent"
recive:any;
// $eveent: any;
getdata(e:any){
this.recive=e
}
}
