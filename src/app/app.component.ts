import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'tabala-multi';
  // list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  // z_m: number = 0;
  // list_result = [[1],[2],[3],[4],[5],[6],[4],[4],[7],[8]];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  // ejecutar = false;
  constructor() {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
  }

  //generate list of numbers
//   generateList() {
//     this.list = [];
//     this.list_result = [];
//     console.log(this.z_m);
//     for (let i = 0; i < this.z_m; i++) {
//       this.list.push(i);
//       this.list_result.push([]);
//     }
//     console.log('AppComponent generateList', this.list);

//     this.generateMatrix();
//     this.ejecutar = true;
//   }

//  //generate matrix iin list_result
//   generateMatrix() {
//     for (let i = 0; i < this.z_m; i++) {
//       for (let j = 0; j < this.z_m; j++) {
//         let result = this.list[i] * this.list[j];
//         if (result > 5) {
//           result = result % 6;
//         }
//         this.list_result[i][j] = result;
//       }
//     }
//     console.log('AppComponent generateMatrix', this.list_result);
//   }
  

}
