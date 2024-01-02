import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoymeterboardComponent } from './pages/joymeterboard/joymeterboard.component';
import { HeaderComponent } from './components/header/header.component';
import { JoymeterCardsModule } from './components/joymeter-cards/joymeter-cards.module';
import { NgbDatepickerModule, NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JoymeterboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    // Component Modules
    JoymeterCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
