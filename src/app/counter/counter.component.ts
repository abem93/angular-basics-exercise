import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})


export class CounterComponent {
  total: number = 0;

  subtractTotal(){
    this.total --;
  }
  increaseCount(){
    this.total++;
  }
}
