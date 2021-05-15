import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-FromEvent',
  templateUrl: './FromEvent.component.html',
  styleUrls: []
})
export class FromEventComponent implements OnInit {
  public videoList: any = [];
  counter = 1;
  @ViewChild('addVideoBtn') addVideoBtn: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    fromEvent(this.addVideoBtn.nativeElement, 'click').subscribe(res => {
      console.log(res);
      this.videoList.push('Video '+ this.counter++);
    })
  }


}
