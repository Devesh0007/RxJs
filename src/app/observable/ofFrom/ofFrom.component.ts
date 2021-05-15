import { Component, OnInit } from '@angular/core';
import { from, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-ofFrom',
  templateUrl: './ofFrom.component.html',
  styleUrls: []
})
export class OfFromComponent implements OnInit {

  dataList: any = [];
  arrayList: any = [];
  stringList: any = [];
  broadcastData;
  fromObs;
  promiseObs;
  promise;
  stringObs;
  ofSubcription: Subscription;
  fromSubcription: Subscription;
  promiseVal: any = null;
  constructor() { }

  ngOnInit() {
    let helloWorld = "Hello World!";
    this.broadcastData = of("a", "b", "c");
    this.fromObs = from(["a", "b", "c", "d"]);
    this.promise = new Promise((resolve) => {
      setTimeout(() => resolve("Promise Resolved"), 3000);
    });
    this.promiseObs = from(this.promise);

    this.promiseObs.subscribe(res => {
      this.promiseVal = res;
    });
    this.stringObs = from(helloWorld);
    this.stringObs.subscribe(res => {
      this.stringList.push(res);
    });
  }

  startBroadcasting() {
    this.ofSubcription = this.broadcastData.subscribe(res => {
      this.dataList.push(res);
    });
  }

  stopBroadcasting() {
    this.ofSubcription.unsubscribe();
  }

  clearList() {
    this.dataList = [];
  }

  startFromBroadcasting() {
    this.fromSubcription = this.fromObs.subscribe(res => {
      this.arrayList.push(res);
    });
  }

  clearFromList() {
    this.arrayList = [];
  }

}
