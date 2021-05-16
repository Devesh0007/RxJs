import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounceTime',
  templateUrl: './debounceTime.component.html',
  styleUrls: []
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('searchInput1') searchInput1: ElementRef;
  @ViewChild('searchInput2') searchInput2: ElementRef;
  requestedData: string = null;
  requestedData2: string = null;
  constructor(private _loadingBar: LoadingBarService) { }

  ngAfterViewInit(){
    const source = fromEvent<any>(this.searchInput1.nativeElement,'keyup').pipe(
      map(event=> event.target.value),
      debounceTime(500)
    );

    source.subscribe(res=>{
      this._loadingBar.start();
      this.requestedData = res;
      setTimeout(() => {
        this.requestedData = null;
        this._loadingBar.stop();
      }, 1000);
    })

    const source2 = fromEvent<any>(this.searchInput2.nativeElement,'keyup').pipe(
      map(event=> event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );

    source2.subscribe(res=>{
      this._loadingBar.start();
      this.requestedData2 = res;
      setTimeout(() => {
        this.requestedData2 = null;
        this._loadingBar.stop();
      }, 2000);
    })
  }
}
