import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CreationComponent } from './customer/creation/creation.component';
import { ListComponent } from './customer/list/list.component';
import { StatisticsComponent } from './customer/statistics/statistics.component';
import { InicioComponent } from './inicio/inicio.component';


import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseService } from './common/services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
    ListComponent,
    StatisticsComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [DatePipe, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
