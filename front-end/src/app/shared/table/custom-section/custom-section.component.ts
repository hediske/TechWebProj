import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { gridType } from '../types/tableInterfaces';

@Component({
  selector: 'app-custom-section',
  templateUrl: './custom-section.component.html',
  styleUrls: ['./custom-section.component.css']
})
export class CustomSectionComponent implements OnInit {

  selected : gridType = 'lines' // Default selected grid type



  constructor(private tableService: TableService) { }
  
 

  pages = [
    {value: 5, viewValue: '5'},
    {value: 10, viewValue: '10'},
    {value: 20, viewValue: '20'},
    {value: 50, viewValue: '50'},
  ]

  sorts = [
    {value: '5', viewValue: '5'},
    {value: '10', viewValue: '10'},
    {value: '20', viewValue: '20'},
    {value: '50', viewValue: '50'},
  ]


  setGridType(grid :gridType) {
    this.selected = grid
    this.onGridChange(this.selected)
  }

  onSortChange(key: string) {
    this.tableService.updateSort(key);
  }

  onPageSizeChange(pageSize: number) {
    this.tableService.updatePageSize(pageSize);
  }

  onGridChange(grid: gridType) {
    this.tableService.updateGrid(grid);
  }

  ngOnInit(): void {
    setTimeout(() => 
    {
    this.onSortChange('5')},400   
  )
  }
}
