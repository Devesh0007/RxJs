import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, timer } from 'rxjs';
import { filter, map, take, takeLast, takeUntil, takeWhile, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: []
})
export class TakeComponent implements OnInit {

  myObservable1;
  myObservable2;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;
  nameList1: any = [];
  nameList2: any = [];
  nameList3: any = [];
  nameList4: any = [];
  persons: any = [
    {id: 1, firstName:"Adam", lastName: "Smith", gender: "Male"},
    {id: 2, firstName:"Alex", lastName: "Markle", gender: "Male"},
    {id: 3, firstName:"Aaron", lastName: "Finch", gender: "Male"},
    {id: 4, firstName:"Ben", lastName: "Ten", gender: "Male"},
    {id: 5, firstName:"Carl", lastName: "Pearson", gender: "Male"},
    {id: 6, firstName:"Dan", lastName: "David", gender: "Female"},
    {id: 7, firstName:"David", lastName: "Willson", gender: "Male"},
    {id: 8, firstName:"Edward", lastName: "Braud", gender: "Male"},
    {id: 9, firstName:"Fred", lastName: "lisa", gender: "Male"},
    {id: 10, firstName:"Frank", lastName: "George", gender: "Male"},
    {id: 11, firstName:"George", lastName: "Martin", gender: "Male"},
    {id: 12, firstName:"Lisa", lastName: "Heydon", gender: "Female"},
    {id: 13, firstName:"Alexa", lastName: "Botez", gender: "Female"},
    {id: 14, firstName:"Nemo", lastName: "George", gender: "Female"},
    {id: 15, firstName:"Christine", lastName: "Smith", gender: "Female"}
  ];

  constructor() { }

  ngOnInit() {

    this.myObservable1 = from(this.persons);

    //Example 1
    this.subscription1 = this.myObservable1
    .pipe(
      take(5),
      toArray()
    )
    .subscribe(res => {
      this.nameList1 = res;
    });

    //Example 2
    this.subscription2 = this.myObservable1
    .pipe(
      takeLast(5),
      toArray()
    )
    .subscribe(res => {
      this.nameList2 = res;
    });

    this.myObservable2 = interval(1000);

    let condition1 = timer(5000);

    //Example 3
    this.subscription3 = this.myObservable2
    .pipe(
      takeUntil(condition1),
      map((x:number)=> this.persons[x]),
    )
    .subscribe(res => {
      this.nameList3.push(res);
    });

    //Example 4
    this.subscription4 = this.myObservable2
    .pipe(
      takeWhile((x:number)=> x < 10),
      map((x:number)=> this.persons[x]),
    )
    .subscribe(res => {
      this.nameList4.push(res);
    });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}
