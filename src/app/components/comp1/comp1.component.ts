import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/appServices/shared.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: []
})
export class Comp1Component implements OnInit {

  username: string;
  txtUsername: string;
  constructor(private _sharedService: SharedService) {
    this._sharedService.username.subscribe(res => this.username = res );
   }

  ngOnInit() {
  }
  updateUsername(){
    this.username = this.txtUsername;
    this._sharedService.username.next(this.txtUsername);
  }
}
