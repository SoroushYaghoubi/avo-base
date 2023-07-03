import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvoInfoService {
  private info: Date[] = [new Date("2023-07-02"), new Date("2023-07-23"), new Date("2023-07-10")];

  getDates(){
    return this.info;
  }

  addDate(newDate: Date){
    this.info.push(newDate);
  }

  constructor() { }
}
