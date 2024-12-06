  import { Component, Input, OnInit } from '@angular/core';
  import { columnInterface,sortInterface,dataInterface, gridType } from './types/tableInterfaces';
  import { FilterService } from '../service/filter.service';
  import { TableService } from './table.service';

  @Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
  })
  export class TableComponent implements OnInit{
    @Input() isCustomizable: boolean = false;
    @Input() isFilterable: boolean = false;
    @Input() allDataLoaded : boolean = false;
    @Input({required : true}) columns : columnInterface[] = [];
    @Input() sortFilters : sortInterface[] = [];
    @Input() data : dataInterface[] = [];
    @Input() dataFetcher : ((filters : any ,page : number ) => Promise<any> ) | undefined = undefined;

    Tabledata = [];
    filters = []
    currentPage : number = 1

    grid : gridType | undefined;
    sort : string | undefined;
    pageSize : number | undefined;

    gridClass : string =""


    constructor(private filterService : FilterService,private tableService : TableService) { }
    ngOnInit(): void {
      this.tableService.gridObservable$.subscribe(data => {
        this.grid = data;
      })
      this.tableService.sortObservable$.subscribe(data => {
        this.sort = data;
      })
      this.tableService.pageSizeObservable$.subscribe(data => {
        this.pageSize = data;
      })

      this.applyChanges()

    }

    updateGrid(){
      if (this.grid) {
        switch (this.grid) {
          case 'FoorCol':
            this.gridClass = 'col-3'; // 4 columns
            break;
          case 'threeCol':
            this.gridClass = 'col-4'; // 3 columns
            break;
          case 'twoCol':
            this.gridClass = 'col-6'; // 2 columns
            break;
          case 'lines':
            this.gridClass = 'col-12'; // Full-width lines
            break;
          default:
            this.gridClass = ''; // Default
        }
      }
    }

    applyChanges(){
      this.updateGrid()
    }
  }
