import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 num1: string = '0';
 num2: string = '0';
 total = 0;
//  calculation: string = '';
 public calculator(calculator : string) {

    switch(calculator){
      case '+':
        return  this.total= parseFloat(this.num1) +parseFloat(this.num2) ;
        case '-':
          return  this.total= parseFloat(this.num1) -parseFloat(this.num2) ;
          case 'x':
            return  this.total= parseFloat(this.num1) *parseFloat(this.num2) ;
            case '/':
              return  this.total= parseFloat(this.num1) /parseFloat(this.num2) ;
              
    }
    console.log()
    return 0;
  }
//  total = this.calculator(this.calculation);
// check(){
//   console.log(this.total);
// }

}
