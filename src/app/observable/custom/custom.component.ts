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
  counter2: number = 1;
  techStatus: string = null;
  techStatus2: string = null;
  customObservable2;
  subscription2: Subscription;
  customObservable3;
  subscription3: Subscription;
  name: any;
  nameStatus: string = null;
  constructor() { }

  ngOnInit() {
    //Example 1
    this.customObservable = Observable.create(observer => {
      setTimeout(() => {
        observer.next("Data emit " + this.counter++);
      }, 500);
      setTimeout(() => {
        observer.next("Data emit " + this.counter++);
      }, 1000);
      setTimeout(() => {
        observer.next("Data emit " + this.counter++);
        //observer.error();
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
      (error) => {
        this.techStatus = "error";
      },
      () => {
        this.techStatus = "completed";
      });


    //Example 2
    this.customObservable2 = Observable.create(observer => {
      setInterval(() => {
        observer.next("Data emit " + this.counter2++);
        if (this.counter2 > 5) {
          observer.error();
        }
        if (this.counter2 > 15) {
          observer.complete();
        }
      }, 500);
    })

    this.subscription2 = this.customObservable2.subscribe(res => {
      this.techList2.push(res);
    },
      error => {
        this.techStatus2 = "error";
      },
      () => {
        this.techStatus2 = "completed";
      });


      //Example 3
    this.customObservable3 = Observable.create(observer => {
      let arr = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal",
      "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter",
      "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
      let count = 1;
      setInterval(() => {

        observer.next(arr[count]);
        if (count > 10) {
          //observer.error();
        }
        count++;
        if (count >= arr.length) {
          observer.complete();
        }

      }, 500);
    })

    this.subscription3 = this.customObservable3.subscribe(res => {
      this.name = res;
    },
      error => {
        this.nameStatus = "error";
      },
      () => {
        this.nameStatus = "completed";
      });
  }

  ngOnDestroy() {
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
}
