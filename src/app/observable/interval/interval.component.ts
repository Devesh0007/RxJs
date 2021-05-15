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
  videoSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    //this.broadcastVideo = interval(1000);
    this.broadcastVideo = timer(3000, 1000);
  }

  startBroadcasting(){
    this.videoSubscription = this.broadcastVideo.subscribe(res => {
      this.videoList.push('Video '+ res);
    });
  }

  stopBroadcasting(){
    this.videoSubscription.unsubscribe();
  }

  clearList(){
    this.videoList = [];
  }
}
