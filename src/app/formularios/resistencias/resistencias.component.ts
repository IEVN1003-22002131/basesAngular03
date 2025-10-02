import { Component } from '@angular/core';
import { Resistencias } from './calculos.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resistencias',
  standalone: true,
  imports:[
    CommonModule,
    FormsModule
  ],
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})

export class ResistenciasComponent {
  private calculadora = new Resistencias();
  coloresBandas = [
    { nombre: 'black', valor: 0 },
    { nombre: 'brown', valor: 1 },
    { nombre: 'red', valor: 2 },
    { nombre: 'orange', valor: 3 },
    { nombre: 'yellow', valor: 4 },
    { nombre: 'green', valor: 5 },
    { nombre: 'blue', valor: 6 },
    { nombre: 'purple', valor: 7 },
    { nombre: 'gray', valor: 8 },
    { nombre: 'white', valor: 9 }
  ];
  coloresMultiplicador = [
    ...this.coloresBandas,
    { nombre: 'gold', valor: 'x0.1' }, { nombre: 'silver', valor: 'x0.01' }
  ];
  coloresTolerancia = [
    { nombre: 'gold', texto: 'Dorado 5%' },
    { nombre: 'silver', texto: 'Plata 10%' }
  ];

  banda1: string= 'orange';
  banda2: string= 'purple';
  multiplicador: string= 'brown';
  tolerancia: string= 'golden';
  resultado: boolean= false;
  res1: string= '';
  res2: string= '';
  res3: string= '';
  toleranciaRes: string= '';
  valorRes: number= 0;
  maxRes: number= 0;
  minRes: number= 0;

  calcular(): void {
    const resultados = this.calculadora.calcularValores(
      this.banda1,
      this.banda2,
      this.multiplicador,
      this.tolerancia
    );

    this.valorRes= resultados.valor;
    this.maxRes= resultados.maximo;
    this.minRes= resultados.minimo;
    this.res1= this.banda1;
    this.res2= this.banda2;
    this.res3= this.multiplicador;
    this.toleranciaRes= this.tolerancia=== 'gold' ? 'Dorado 5%': 'Plata 10%';
    this.resultado= true;
  }
}
