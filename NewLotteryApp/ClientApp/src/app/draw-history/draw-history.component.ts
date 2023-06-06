import { Component, Inject, OnInit } from '@angular/core';
import { DrawHistory } from '../models/DrawHistory';
import { Lottery } from '../services/lottery.service';

@Component({
  selector: 'app-draw-history',
  templateUrl: './draw-history.component.html'
})
export class DrawHistoryComponent implements OnInit {

  constructor(public lottery: Lottery) {
  }

  ngOnInit(): void {
    this.lottery.loadDrawHistory()
      .subscribe();
  }

}
