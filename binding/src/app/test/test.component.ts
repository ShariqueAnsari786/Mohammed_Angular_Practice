import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
  Hello {{name}}
  </h2>
  <h2>{{greetUser()}}</h2>
  <input [id]="myId" type="text" value="EnterName">
  <h2 [class.text-danger]="error">Ansari</h2>
  <h1 [ngClass]="message">Mohammad</h1>
<button (click)="onclick($event)">Greet</button>
{{greeting}}
<h2 *ngIf="ctulhu; else elseblock">Azathoth</h2>
<ng-template #elseblock>
<h1>Nameless-MIST</h1>
<div [ngSwitch]="color">
<div *ngSwitchCase="'red'">red</div>
<div *ngSwitchCase="'green'">green</div>
<div *ngSwitchCase="'blue'">blue</div>
<div *ngSwitchDefault>Pick again</div>
<div *ngFor="let array of colors; index as i">
<h1>{{i}} {{array}}</h1>
</div>

  `
  ,
  // templateUrl: './test.component.html',
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special{
      font-style: italic;
    }
    `
  ]
})
export class TestComponent implements OnInit {

  public colors = ["red", "green", "blue", "orange"];
  public name = "Ahmed";
  public myId = "testId";
  public Success = "text-success";
  public error = false;
  public ctulhu = false;
  public color = "orange";
  public message = {
    "text-success": !this.error,
    "text-danger": this.error,
    "text-special": this.error,
  }
  public greeting = "";
  
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return"Hello" + this.name;
  }
  onclick(event)
  {
    console.log(event);
    this.greeting = event.type;
  }
}
