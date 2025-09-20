import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;
calcular(operaciones: string): void {
    switch (operaciones) {
      case 'suma':
        this.resultado=parseInt(this.num1)+parseInt(this.num2);
      case 'resta':
        this.resultado=parseInt(this.num1)-parseInt(this.num2);
      case 'multiplicacion':
        this.resultado=parseInt(this.num1)*parseInt(this.num2);
      case 'division':
        this.resultado=parseInt(this.num1)/parseInt(this.num2);
      break;
    }
  }
}
