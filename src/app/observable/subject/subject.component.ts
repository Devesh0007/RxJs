import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from 'src/app/appServices/shared.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: []
})
export class SubjectComponent implements OnInit, OnDestroy {

  username: string;
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this._sharedService.username.subscribe(res => this.username = res );
    this._sharedService.isExclusive.next(true);
  }
  ngOnDestroy() {
    this._sharedService.isExclusive.next(false);
  }

}
