import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: []
})
export class FilterComponent implements OnInit {
  myObservable1;
  myObservable2;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  nameList1: any = [];
  nameList3: any = [];
  nameList2: any = [];

  constructor() { }

  ngOnInit() {

    this.myObservable1 = from([
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
    ]);

    //Example 1
    this.subscription1 = this.myObservable1
    .pipe(
      filter((person:any) => (person.firstName + person.lastName).length > 10),
      toArray()
    )
    .subscribe(res => {
      this.nameList1 = res;
    });

    //Example 2
    this.subscription2 = this.myObservable1
    .pipe(
      filter((person:any) => person.id <= 10),
      toArray()
    )
    .subscribe(res => {
      this.nameList2 = res;
    });

    //Example 3
    this.subscription3 = this.myObservable1
    .pipe(
      filter((person:any) => person.gender == "Male"),
      toArray()
    )
    .subscribe(res => {
      this.nameList3 = res;
    });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

}
