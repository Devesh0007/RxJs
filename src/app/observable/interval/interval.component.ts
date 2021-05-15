import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: []
})
export class IntervalComponent implements OnInit {

  videoList: any =[];
  broadcastVideo;
  videosubcription: Subscription;
  constructor() { }

  ngOnInit() {
    //this.broadcastVideo = interval(1000);
    this.broadcastVideo = timer(3000, 1000);
  }

  startBroadcasting(){
    this.videosubcription = this.broadcastVideo.subscribe(res => {
      this.videoList.push('Video '+ res);
    });
  }

  stopBroadcasting(){
    this.videosubcription.unsubscribe();
  }

  clearList(){
    this.videoList = [];
  }
}
