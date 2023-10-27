import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataConversionService {

  private jsonData: any[] = [];

  setJsonData(data: any[]) {
    this.jsonData = data;
  }

  getJsonData() {
    return this.jsonData;
  }
}
