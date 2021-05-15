import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: []
})
export class CustomComponent implements OnInit {

  techList: any = [];
  techList2: any = [];
  customObservable;
  counter: number = 1;
  techStatus: string = null;
  constructor() { }

  ngOnInit() {
    this.customObservable = Observable.create(observer => {
      setTimeout(() => {
        observer.next("Data emit " + this.counter++);
      }, 500);
      setTimeout(() => {
        observer.next("Data emit " + this.counter++);
      }, 1000);
      setTimeout(() => {
        observer.next("Data emit " + this.counter++);
        observer.error();
      }, 1500);
      setTimeout(() => {
        observer.next("Data emit " + this.counter++);
      }, 2000);
      setTimeout(() => {
        observer.next("Data emit " + this.counter++);
      }, 2500);
      setTimeout(() => {
        observer.next("Data emit " + this.counter++);
        observer.complete();
      }, 3000);
    })

    this.customObservable.subscribe(res => {
      this.techList.push(res);
    },
    error=>{
      this.techStatus = "error";
    },
    ()=>{
      this.techStatus = "completed";
    });

  }
}
