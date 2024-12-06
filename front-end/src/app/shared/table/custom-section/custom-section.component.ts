import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { gridType } from '../types/tableInterfaces';

@Component({
  selector: 'app-custom-section',
  templateUrl: './custom-section.component.html',
  styleUrls: ['./custom-section.component.css']
})
export class CustomSectionComponent implements OnInit {

  selected = '1'  // Default selected grid type



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


  setGridType(grid : string) {
    this.selected = grid
    this.onGridChange(this.selected)
  }

  onSortChange(key: string) {
    this.tableService.updateSort(key);
  }

  onPageSizeChange(pageSize: number) {
    this.tableService.updatePageSize(pageSize);
  }

  onGridChange(grid: string) {
    this.tableService.updateGrid(grid as gridType);
  }

  ngOnInit(): void {
    this.onGridChange(this.selected)
    this.onPageSizeChange(50)
    this.onSortChange('5')
  }
}
