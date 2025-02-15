import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudantComponent } from './componentes/studant/studant.component';
import { StudentListComponent } from './componentes/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudantComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
