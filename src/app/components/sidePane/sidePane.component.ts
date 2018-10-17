import { Component, OnInit, DoCheck } from '@angular/core';
import { InputService } from './input.service';
import { Observable, timer } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-sidePane',
  templateUrl: './sidePane.component.html',
  styleUrls: ['./sidePane.component.css']
})
export class SidePaneComponent implements OnInit, DoCheck{
  subscription: any;
  ticks = 0;
  filter: Observable<Object>;
  amountOfWords: any = 0;
  user: User;
  selectedExampleText: string;

  constructor(private inputService: InputService) {
    this.user = inputService.user;
    this.selectedExampleText = inputService.selectedExampleText;
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    const amountCharacters = this.user.response.length;
    if(!this.inputService.started && amountCharacters > 0) {
      let localTimer = timer(0,1000);
      this.subscription = localTimer.subscribe(t=>this.ticks = t);
      this.inputService.started = true;
    }
    if(amountCharacters === this.selectedExampleText.length) {
      this.subscription.unsubscribe();
      this.inputService.ended = true;
    }
    this.amountOfWords = this.calculateAmountOfWords(this.user.response);
  }

  private calculateAmountOfWords(words): any {
    return words.split(/\W+/).length;
  }
  private calculateWordPerMinute(): string {
    let minutes = (this.ticks/60);
    minutes = minutes < 1 ? 1 : minutes;
    return (this.amountOfWords / minutes).toString();
  }
}
