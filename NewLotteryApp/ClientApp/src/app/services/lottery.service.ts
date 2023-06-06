import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { DrawHistory } from "../models/DrawHistory";

@Injectable()
export class Lottery {
  constructor(private http: HttpClient) { }

  public drawHistory: DrawHistory[];
  public drawNumbers: number[];
  public saveResponse;
  public baseURL = "/api/draws/";
  public label = "Draw";

  draw() {
    this.GetDrawNumbers()
      .subscribe(
        response => {
          this.callback();
          console.log(JSON.stringify(response));

        }, error => console.log("Error"));


  }

  callback() {
    var drawHistory = new DrawHistory();
    drawHistory.draw = this.drawNumbers;
    this.SaveDrawNumbers(drawHistory)
    this.label = "Draw again";
  }

  loadDrawHistory() {
    return this.http.get<DrawHistory[]>(this.baseURL + "drawHistory")
      .pipe(map(data => {
        this.drawHistory = data;
        return;
      }));
  }

  GetDrawNumbers() {
    return this.http.get<number[]>(this.baseURL + "NewDraw")
      .pipe(map(data => {
        this.drawNumbers = data;
        return; 
      }));
  }

  SaveDrawNumbers(drawHistory: DrawHistory){
    console.log(JSON.stringify(drawHistory));
    return this.http.post(this.baseURL + "SaveDraw", drawHistory)
      .subscribe(
        response => console.log(JSON.stringify(response)),
        error => console.log(error)
      );
  }
}
