import { Injectable, EventEmitter, Output } from "@angular/core";
import { User } from "../user";

@Injectable({
  providedIn: 'root',
})
export class InputService {
  user: User = {
    response: '',
  };
  started = false;
  ended = false;

  exampleText = [
    `s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. `,
    `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `
  ];

  selectedExampleText: string;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor() {
    this.selectedExampleText = this.exampleText[Math.floor((Math.random() * (this.exampleText.length - 1)) + 1)];
  }
}
