  import { Component, Input, OnInit } from '@angular/core';
  import { columnInterface, sortInterface, dataInterface, gridType } from './types/tableInterfaces';
  import { FilterService } from '../service/filter.service';
  import { TableService } from './table.service';
import { combineLatest } from 'rxjs';

  @Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
  })
  export class TableComponent implements OnInit{
    @Input() isCustomizable: boolean = true;
    @Input() isFilterable: boolean = false;
    @Input() allDataLoaded : boolean = false;
    @Input() requireCols : boolean = false;
    @Input() columns : columnInterface[] = [];
    @Input() sortFilter : sortInterface | undefined = undefined;
    @Input() data : any[] = [];
    @Input() dataFetcher : ((filters : any ,page : number,size:number,sort:any ) => Promise<any> ) | undefined = undefined;
    @Input() cardTemplate: any;
    @Input({required:true}) rowTemplate: any;
    
    Tabledata : any[] = [];
    filters : any[] = []
    currentPage : number = 1
    isLoading : boolean = false
    isError : boolean = false
    grid : gridType | undefined = 'lines';
    pageSize : number | undefined;
    gridClass : string = ""


    constructor(private tableService : TableService) { }
    ngOnInit(): void {
      if (!this.rowTemplate) {
        throw new Error("rowTemplate is required for TableComponent.");
      }
      combineLatest([
        this.tableService.pageSizeObservable$,
        this.tableService.sortObservable$,
      ]).subscribe(   ([pageSize, currentPage]) => {    
         // this.sortInterface = sort;
        this.pageSize = pageSize;
        this.tableService.updateCurrentPage(1);
        this.applyChanges();}
      );
      combineLatest([
        this.tableService.gridObservable$,
        this.tableService.currentPageObservable$
      ]).subscribe(([grid, currentPage]) => {
        this.grid = grid;
        this.currentPage = currentPage || 1;
        this.applyChanges();
      });
      this.applyChanges()
    }

    updateGrid(){
      if (this.grid) {
        switch (this.grid) {
          case 'foorCol':
            this.gridClass = 'col-3'; 
            break;
          case 'threeCol':
            this.gridClass = 'col-4';
            break;
          case 'twoCol':
            this.gridClass = 'col-6'; 
            break;
          case 'lines':
            this.gridClass = 'col-12'; 
            break;
          default:
            this.gridClass = ''; 
        }
        console.log('Updated gridClass:', this.gridClass);

      }
    }

    async applyChanges(){
      this.updateGrid()
      if (this.dataFetcher) {
        this.isLoading = true
        try{
          this.Tabledata = await this.dataFetcher(this.filters,this.currentPage,this.pageSize!,this.sortFilter)
        }catch(error){
          console.log(error)
          this.isError = true
          this.Tabledata = []
        }finally{
          this.isLoading = false
        }
      }
      else {
        if(this.requireCols){
          this.Tabledata = this.data
        }
        this.tableService.updateTotalItems(this.data.length)
        this.tableService.updateTotalPages(Math.ceil(this.data.length / this.pageSize!))
        let dataCopy = this.data.slice()
        if(this.sortFilter){
          dataCopy = this.tableService.sortTable(dataCopy,this.sortFilter)
        }
        if(this.isFilterable){
          dataCopy = this.tableService.filterTable(dataCopy,this.filters)
        }
        this.Tabledata = this.tableService.sliceTable(dataCopy,this.currentPage,this.pageSize!)
      }
      console.log(this.Tabledata)

    }

  }
