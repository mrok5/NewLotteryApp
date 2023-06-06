import { Component, Inject, OnInit } from '@angular/core';
import { Lottery } from '../services/lottery.service';

@Component({
  selector: 'app-lets-play',
  templateUrl: './lets-play.component.html'
})
export class DrawComponent{

  constructor(public lottery: Lottery) {
  }
}
