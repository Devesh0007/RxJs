import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { delay, filter, retry, retryWhen, scan, tap, toArray } from 'rxjs/operators';
import { SharedService } from 'src/app/appServices/shared.service';
import { IPhotos, IPost } from 'src/app/models/sharedModel';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: []
})
export class RetryComponent implements OnInit {

  postList1: IPost[] = [];
  photosList: IPhotos[] = [];
  status: string = "Fetch data";
  isDataFetched: boolean = false;

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {




  }
  getPhotos() {
    this.status = "Fetching...";
    this.isDataFetched = false;
    this._sharedService.getPhotos().pipe(
      //ex 1
      // retry(5)
      //ex 2
      retryWhen((err)=> err.pipe(
        delay(3000),
        scan(retryCount=> {
          if(retryCount >= 5){
            throw err;
          }else{
            retryCount += 1;
            this.status = "Retrying Attempt #" + retryCount;
            return retryCount;
          }
        }, 0)
        ))
    )
      .subscribe((res: IPhotos[]) => {
        this.photosList = res;
        this.status = "Data fetched";
        this.isDataFetched = true;
      },
      (error)=> {
        this.isDataFetched = false;
        this.status = "Error while fetching data";
      },
      ()=>{

      });
  }
  ngOnDestroy() {
    // this.subscription1.unsubscribe();
    // this.subscription2.unsubscribe();
    // this.subscription3.unsubscribe();
  }

}
