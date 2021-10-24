import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-z-m',
  templateUrl: './z-m.component.html',
  styleUrls: ['./z-m.component.scss']
})
export class ZMComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'tabala-multi';
  list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  z_m: number = 0;
  // list_result = [1,2];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  ejecutar = false;


  //generate list of numbers
  generateList() {
    this.list = [];
    // this.list_result = [];
    console.log(this.z_m);
    for (let i = 0; i < this.z_m; i++) {
      this.list.push(i);
      // this.list_result.push(i);
    }
    console.log('AppComponent generateList', this.list);

    // this.generateMatrix();
    this.ejecutar = true;
  }

 //generate matrix iin list_result
  // generateMatrix() {
  //   for (let i = 0; i < this.z_m; i++) {
  //     for (let j = 0; j < this.z_m; j++) {
  //       let result = this.list[i] * this.list[j];
  //       if (result > this.z_m - 1) {
  //         result = result % this.z_m;
  //       }
  //       this.list_result[i][j] = result;
  //     }
  //   }
  //   console.log('AppComponent generateMatrix', this.list_result);
  // }


  changeNumer(numI: number,numJ: number,item1:number){
    let result = numI * numJ;
        if (result >= item1) {
          result = result % item1;
        }
       return result;
  }

}
