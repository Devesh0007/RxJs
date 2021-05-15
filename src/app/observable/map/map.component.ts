import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: []
})
export class MapComponent implements OnInit {
  techList: any = [];
  customObservable;
  customObservable2;
  counter: number = 1;
  techStatus: string = null;
  subscription1: Subscription;
  nameList: any = [];
  subscription2: Subscription;
  constructor() { }

  ngOnInit() {
    //Example 1
    this.customObservable = interval(500);

    this.subscription1 = this.customObservable.pipe(
      map(x => 'Video ' + x)
    )
    .subscribe(res => {
      this.techList.push(res);
    });

    setTimeout(() => {
      this.subscription1.unsubscribe();
    }, 10000);


    this.customObservable2 = from([
      {id:1, name:"Adam"},
      {id:2, name:"Alex"},
      {id:3, name:"Aaron"},
      {id:4, name:"Ben"},
      {id:5, name:"Carl"},
      {id:6, name:"Dan"},
      {id:7, name:"David"},
      {id:8, name:"Edward"},
      {id:9, name:"Fred"},
      {id:10, name:"Frank"},
      {id:11, name:"George"},
      {id:12, name:"Hal"}
    ]);
    this.subscription2 = this.customObservable2
    .pipe(
      map(data => data["name"])
    )
    .subscribe(res => {
      this.nameList.push(res);
    });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
