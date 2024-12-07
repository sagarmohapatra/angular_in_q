import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveComponent,
    ParentToChildComponent,
    ErrorpageComponent,
    ChildComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
