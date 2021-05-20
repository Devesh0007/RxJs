import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/appServices/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  public static readonly url: string ="http://localhost:4200";
  isExclusive: boolean = false;
  constructor(private _sharedService: SharedService) {
    this._sharedService.isExclusive.subscribe(res => this.isExclusive = res );
   }

  ngOnInit() {
  }

}
