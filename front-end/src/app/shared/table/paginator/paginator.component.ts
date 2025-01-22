import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { combineLatest, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit,OnDestroy {

  private destroy$ = new Subject<void>();

 constructor(private tableService : TableService){}

  ngOnInit(): void {
    combineLatest([
      this.tableService.currentPageObservable$,
      this.tableService.totalPagesObservable$,
      this.tableService.totalItemsObservable$,
      this.tableService.pageSizeObservable$
    ]).pipe(takeUntil(this.destroy$))
    .subscribe(([currentPage,totalPages,totalItems,pageSize]) =>{
      this.totalPages = totalPages!;
      this.totalItems = totalItems!;
      this.pageSize = pageSize!;
      this.currentPage = currentPage!;
    })
  } 
  currentPage: number = 1;
  pageSize : number = 100;
  totalItems : number = 100 ;
  totalPages : number = 100 ;
  


  getMinValue() {
    return (this.currentPage!- 1) * this.pageSize! + 1;
}
  
  getMaxValue() {
    return Math.min(this.currentPage! * this.pageSize!, this.totalItems!)
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages!) {
      return; 
    }
    this.currentPage = page;
    this.applyChanges()
  }

  getPaginationPages() {
    if(this.currentPage === undefined) {
      return;
    }
    let louer = this.currentPage;
    let upper = this.currentPage;

    louer = Math.max(louer - 2, 1);
    upper = Math.min(upper + 2, this.totalPages!);

    while(upper - louer !== 4) {
      if(louer !== 1) {
        louer = louer - 1;
      }else if(upper !== this.totalPages){
        upper = upper + 1;
      }else{
        break;
      }
    }

    return Array.from({length: upper - louer + 1}, (_, i) => i + louer); 
  }


  applyChanges(){
    this.tableService.updateCurrentPage(this.currentPage!);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
