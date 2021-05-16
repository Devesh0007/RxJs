import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { SharedService } from 'src/app/appServices/shared.service';
import { IProvider } from 'src/app/models/providerModel';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: []
})
export class PluckComponent implements OnInit {

  techList: any = [];
  customObservable;
  customObservable2;
  counter: number = 1;
  techStatus: string = null;
  subscription1: Subscription;
  nameList: any = [];
  subscription2: Subscription;

  constructor(private _sharedService: SharedService) {

  }

   ngOnInit() {
    //Example 1
    this.customObservable = interval(500);

    this.subscription1 = this.customObservable.pipe(
      map(x => 'Video ' + x)
    )
    .subscribe(res => {
      this.techList.push(res);
    });

    setTimeout(() => {
      this.subscription1.unsubscribe();
    }, 10000);

    this.customObservable2 = from(this.providerList);
    this.subscription2 = this.customObservable2
    .pipe(pluck('MeasureCode'))
    .subscribe(res => {
      this.nameList.push(res);

    });

    setTimeout(() => {
      this.subscription2.unsubscribe();
    }, 1000);


  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }


  providerList: IProvider[] = [{
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_001_01_DENOMINATOR",
    "MeasureName": "",
    "Score": "3046",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_001_01_OBSERVED",
    "MeasureName": "Hospice and Palliative Care – Treatment Preferences",
    "Score": "99.9",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_002_01_DENOMINATOR",
    "MeasureName": "",
    "Score": "3046",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_002_01_OBSERVED",
    "MeasureName": "Beliefs & Values Addressed (if desired by the patient)",
    "Score": "100",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_003_01_DENOMINATOR",
    "MeasureName": "",
    "Score": "3046",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_003_01_OBSERVED",
    "MeasureName": "Hospice and Palliative Care – Pain Screening",
    "Score": "99.2",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_004_01_DENOMINATOR",
    "MeasureName": "",
    "Score": "1716",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_004_01_OBSERVED",
    "MeasureName": "Hospice and Palliative Care – Pain Assessment",
    "Score": "97.4",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_005_01_DENOMINATOR",
    "MeasureName": "",
    "Score": "3046",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_005_01_OBSERVED",
    "MeasureName": "Hospice and Palliative Care – Dyspnea Screening",
    "Score": "99.8",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_006_01_DENOMINATOR",
    "MeasureName": "",
    "Score": "1421",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_006_01_OBSERVED",
    "MeasureName": "Hospice and Palliative Care – Dyspnea Treatment",
    "Score": "99.6",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_007_01_DENOMINATOR",
    "MeasureName": "",
    "Score": "998",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_007_01_OBSERVED",
    "MeasureName": "Patient Treated with an Opioid Who Are Given a Bowel Regimen",
    "Score": "99.7",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  },
  {
    "CCN": 31500,
    "FacilityName": "HOSPICE OF THE VALLEY - CENTRAL",
    "AddressLine1": "1510 EAST FLOWER STREET, BUILDING 2",
    "AddressLine2": "",
    "City": "PHOENIX",
    "State": "AZ",
    "ZipCode": 85014,
    "CountyName": "Maricopa",
    "PhoneNumber": "(602) 287-7000",
    "CMSRegion": 9,
    "MeasureCode": "H_008_01_DENOMINATOR",
    "MeasureName": "",
    "Score": "2338",
    "Footnote": null,
    "StartDate": "1/1/2017",
    "EndDate": "12/31/2017"
  }];
}
