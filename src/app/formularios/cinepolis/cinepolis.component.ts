import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  standalone: true, 
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  comprador: string= '';
  cantidadCompradores: number= 1;
  tarjetaCineco: boolean= false;
  cantidadBoletos: number= 0;
  //LLAMA AL RESULTADO CUANDO REALIZAMOS EL PAGO
  resultado: string='';
  //ESTA FUNCION LIMITA LA CANTIDAD DE BOLETOS QUE PUEDEN SER COMRADOS
  get maxBoletos(): number {
    return this.cantidadCompradores*7;
  }

  procesarCompra(): void {
    //PRIMER ENUNCIADO
    if (this.cantidadBoletos > this.maxBoletos) {
      this.resultado = `Compra Invalida: No es posible adquirir 
      mas de ${this.maxBoletos} boletos por persona. El boleto tiene 
      un costo de $12.00, puedes obtener descuentos conociendo los 
      requisitos en nuestra sitio oficial.`;
      return;
    }
    //MENSAJE DE ERROR 
    if (!this.comprador || this.cantidadBoletos <= 0) {
      this.resultado = 'Datos incompletos.';
      return;
    }
    //CALCULO DE PRECIOS
    const costoBoleto = 12.00;
    let totalAPagar = this.cantidadBoletos * costoBoleto;
    let subtotal=this.cantidadBoletos * costoBoleto;
    let descuentoPorCantidad = 0;

    //PUNTO 1 - 15% AL COMPRAR MAS DE 5 BOLETOS
    if (this.cantidadBoletos > 5) {
      descuentoPorCantidad = totalAPagar * 0.15;
    //PUNTO 2 - 10% CUANDO SE COMPRAN 3-5 BOLETOS
    } else if (this.cantidadBoletos >= 3) {
      descuentoPorCantidad = totalAPagar * 0.10;
    }
    totalAPagar -= descuentoPorCantidad;
    //AL FINAL ESTE BLOQUE HACE QUE NO HAYA 
    //DESCUENTO SI SE COMPRAN 2 O MENOS BOLETOS

    //PUNTO 3 - TARJETA CINECO
    let descuentoTarjeta = 0;
    if (this.tarjetaCineco) {
      descuentoTarjeta = totalAPagar * 0.10;
      totalAPagar -= descuentoTarjeta;
    }
    
    //MENSAJE DE PAGO REALIZADO
    this.resultado = 
    ` Boletos adquiridos: ${this.cantidadBoletos}<br>
      Subtotal: $${subtotal.toLocaleString('es-CO')}<br>
      Descuento por boletos comprados: $${descuentoPorCantidad.toLocaleString('es-CO')}<br>
      Descuento Tarjeta Cineco: $${descuentoTarjeta.toLocaleString('es-CO')}<br>
      Total: $${totalAPagar.toLocaleString('es-CO')}<br>
    `;
  }
  
  //LIMPIEZA DE FORMULARIO
  salir(): void {
    this.comprador = '';
    this.cantidadCompradores = 1;
    this.tarjetaCineco = false;
    this.cantidadBoletos = 0;
    this.resultado = '';
  }
}