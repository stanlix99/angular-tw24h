import { Component, OnInit } from '@angular/core';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { TwitsService } from './twits.service';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { initializeApp } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TxtSpeechService } from './txt-speech.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-test';
  
  mydoc:any | undefined;

  twitlist = []
  constructor(private firestore: AngularFirestore,private textToSpeechService: TxtSpeechService) {}

  speak(text: string): void {
    this.textToSpeechService.speak(text);
  }

  stopSpeaking(): void {
    this.textToSpeechService.stop();
  }
  currentIndex = 0;


  ngOnInit(): void {
    this.firestore
    .collection('currentTwits')
    .doc('ultimosTweets')
    .valueChanges()
    .subscribe((document) => {
      
      this.mydoc = document;

      console.log(this.mydoc.arr)
      
      this.showTweets();

    });

    


   
    
   
    
   
  }

  showTweets() {
    setInterval(() => {
      this.mydoc.arr.sort((a: { id: number; }, b: { id: number; }) => {
        // Convert time to a numerical value for comparison
        const timeA = a.id;
        const timeB = b.id;
      
        // Compare based on the numerical time value
        if (timeA < timeB) {
          return -1;
        } else if (timeA > timeB) {
          return 1;
        } else {
          return 0;
        }
      });
      this.currentIndex = (this.currentIndex + 1) % this.mydoc.arr.length;
      //this.speak()

      this.speak(this.mydoc.arr[this.currentIndex].tweet)
    }, 20000); // Switch tweet every 5 seconds
  }
  

}
