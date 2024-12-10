import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @ViewChild('myFrom') myForm: NgForm | undefined;
  
  store: any[] = [];
  toggle: any = false;
  constructor() {
    console.log('check', this.store);
  }
  namesearch:any="";
  // view child acess the table without parameter pass
  onSubmit() {
    console.log(this.myForm?.value);
    this.toggle = true;
    this.store.push({ ...this.myForm?.value });

    // other method store single data
    this.formData.name = this.myForm?.value.name;
    this.formData.password = this.myForm?.value.password;
    this.myForm?.reset();
  }
  // here we have pass reference  on onSubmit function in html file and ts file but ts file write NgForm
  // onSubmit(form:NgForm){
  // console.log(this.form);

  // }
  formData = {
    name: '',
    password: '',
  };
  delete(index: any) {
    this.store.splice(index, 1);
  }

}
