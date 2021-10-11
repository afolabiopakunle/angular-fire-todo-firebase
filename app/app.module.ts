import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from '@angular/fire/compat/firebase.app.module';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
