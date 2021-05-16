import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProvider  } from "../models/providerModel";
import { IPost, IPhotos  } from "../models/sharedModel";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

constructor(private _http: HttpClient) { }

loadJson(): Observable<IProvider[]> {
  const jsonFile = `../assets/json/provider.json`;
  return this._http.get<IProvider[]>(jsonFile);
}

getPosts(){
  return this._http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(map((res: IPost[])=> res ));
}

getPhotos(){
  return this._http.get<any>('https://jsonplaceholder.typicode.com/photos').pipe(map((res: IPhotos[])=> res ));
}
}
