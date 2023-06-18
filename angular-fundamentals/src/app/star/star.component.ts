import { Component } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent {

  isStared: boolean = true;

  onClick(){
    this.isStared = !this.isStared;
  }
}
