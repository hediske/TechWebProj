import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { gridType, sortInterface } from './types/tableInterfaces';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  //create subjects for the custom component
  private gridSubject = new BehaviorSubject<gridType>('FoorCol');
  private sortSubject = new BehaviorSubject<string>('');
  private pageSizeSubject = new BehaviorSubject<number>(50);
  
  //exposing the subjects
  gridObservable$ = this.gridSubject.asObservable();
  sortObservable$ = this.sortSubject.asObservable();
  pageSizeObservable$ = this.pageSizeSubject.asObservable();

  constructor() { }

  updateSort(key: string) {
    this.sortSubject.next(key);
  }

  updatePageSize(pageSize: number) {
    this.pageSizeSubject.next(pageSize);
  }

  updateGrid(gridType: gridType) {
    this.gridSubject.next(gridType);
  }

}
