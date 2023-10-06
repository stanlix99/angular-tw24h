import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TxtSpeechService {

  private synth: SpeechSynthesis;

  constructor() {
    this.synth = window.speechSynthesis;
  }

  speak(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    this.synth.speak(utterance);
  }

  stop(): void {
    this.synth.cancel();
  }
}

