import { Component } from '@angular/core';
import { InputService } from '../sidePane/input.service';
import { User } from '../user';
@Component({
  selector: 'app-bottomBar',
  templateUrl: './bottomBar.component.html',
  styleUrls: ['./bottomBar.component.css']
})
export class BottomBarComponent {
  user: User;

  constructor(private inputService: InputService) { }

  ngOnInit(){
    this.user = this.inputService.user;
  }
}
