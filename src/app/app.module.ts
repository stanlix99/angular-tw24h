import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app'
import { environment } from 'src/environments/environment';

import { provideFirestore,getFirestore } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { TxtSpeechService } from './txt-speech.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      projectId: 'twapi24h',
    appId: '1:418382836446:web:2a949943f54ff46bfb484f',
    storageBucket: 'twapi24h.appspot.com',
    apiKey: 'AIzaSyAUtwv-h0AV3CLdVOjZPHVlUeDYSf6lqVM',
    authDomain: 'twapi24h.firebaseapp.com',
    messagingSenderId: '418382836446',
    }),
    AngularFireModule,
  ],
  providers: [TxtSpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
