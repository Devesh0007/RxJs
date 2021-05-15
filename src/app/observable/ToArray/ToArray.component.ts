import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-ToArray',
  templateUrl: './ToArray.component.html',
  styleUrls: []
})
export class ToArrayComponent implements OnInit {
  myArr= [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ];
  videoList: any =[];
  broadcastVideo;
  videosubcription: Subscription;
  constructor() { }

  ngOnInit() {
    //example 1
    //this.broadcastVideo = interval(200);

    //example 2
    this.broadcastVideo = from(this.myArr);
  }

  startBroadcasting(){
    this.videosubcription = this.broadcastVideo.pipe(
      take(6),
      toArray()
    ).subscribe(res => {
      this.videoList = [...res];
      console.log(res);
    });
  }

  stopBroadcasting(){
    this.videosubcription.unsubscribe();
  }

  clearList(){
    this.videoList = [];
  }
}
