import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { gridType, sortInterface } from './types/tableInterfaces';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  

  //create subjects for the custom component
private gridSubject = new BehaviorSubject<gridType>('lines');
private sortSubject = new BehaviorSubject<string | undefined>(undefined);
private pageSizeSubject = new BehaviorSubject<number | undefined>(10);
private currentPageSubject = new BehaviorSubject<number | undefined>(1);
private totalPagesSubject = new BehaviorSubject<number | undefined>(10);
private totalItemsSubject = new BehaviorSubject<number | undefined>(100);

  //exposing the subjects
  gridObservable$ = this.gridSubject.asObservable();
  sortObservable$ = this.sortSubject.asObservable();
  pageSizeObservable$ = this.pageSizeSubject.asObservable();
  currentPageObservable$ = this.currentPageSubject.asObservable();
  totalPagesObservable$ = this.totalPagesSubject.asObservable();
  totalItemsObservable$ = this.totalItemsSubject.asObservable();


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

  updateCurrentPage(currentPage: number) {
    this.currentPageSubject.next(currentPage);
  }

  updateTotalPages(totalPages: number) {
    this.totalPagesSubject.next(totalPages);
  }

  updateTotalItems(totalItems: number) {
    this.totalItemsSubject.next(totalItems);
  }


sliceTable(data: any[], currentPage: number, pagesize: number): any[] {
    const startIndex = (currentPage - 1) * pagesize;
    const endIndex = startIndex + pagesize;
    return data.slice(startIndex, endIndex);
}

comparator(sort: sortInterface) {
    return (a : any, b : any) => {
        const aValue = a[sort.key];
        const bValue = b[sort.key];
        if (aValue < bValue) {
            return -1;
        }
        if (aValue > bValue) {
            return 1;
        }
        return 0;
    };
}

sortTable (data: any[], sort: sortInterface): any[] {
    return data.sort(this.comparator(sort));

}

filterTable(data: any[], filters: any[]): any[] {
    return data.filter((item) => {
        for (const key in filters) {
            if (item[key] !== filters[key]) {
                return false;
            }
        }
        return true;
    });

  }
}
