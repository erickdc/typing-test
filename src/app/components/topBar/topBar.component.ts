import { Component, OnInit, DoCheck } from '@angular/core';
import { InputService } from '../sidePane/input.service';
import { User } from '../user';

@Component({
  selector: 'app-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css']
})
export class TopBarComponent implements OnInit{
  selectedExampleText: string;
  user: User;


  constructor(private inputService: InputService) {
    this.selectedExampleText = inputService.selectedExampleText;
  }

  ngOnInit(){
    this.user = this.inputService.user;
  }
}
