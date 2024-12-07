import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TableComponent } from './table/table.component';
 
const routes: Routes = [
  {path:"",redirectTo:"binding",pathMatch:"full"},
  {path:"binding",component:BindingComponent},
  {path:"directive",component:DirectiveComponent},
  {path:"parentchild",component:ParentToChildComponent},
  {path:"table",component:TableComponent},
  {path:"**",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
