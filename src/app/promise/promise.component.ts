import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: []
})
export class PromiseComponent implements OnInit {
  constructor() { }

  ngOnInit() {
   let getServerData = new Promise((resolve, reject)=>{
     let data = "Success";
     setTimeout(()=>{
      resolve(data);
     },2000)
   })

   getServerData.then(res=>{
      console.log(res);
   }).catch(res=>{
    console.log(res);
   }).finally();
  }
  execute(){

  }
}
