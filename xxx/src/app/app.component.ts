import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
   dosis: number | null = null;
  motor1: number = 0;
  motor2: number = 0;
  motor3: number = 0;
  motor2_1: number = 0; // Para 2 tolvas
  motor2_2: number = 0; // Para 2 tolvas
  resultado: string = '';

  calcular() {
    if (this.dosis !== null && !isNaN(this.dosis)) {
      try {
        const resultado = this.dosis * 45.45 / 100;
        const resta = (this.dosis - resultado) / 2;

        const resultado2 = this.dosis * 62.5 / 100;
        const resta2 = this.dosis - resultado2;

        // Para 3 tolvas
        this.motor1 = resultado;
        this.motor2 = resta;
        this.motor3 = resta;

        // Para 2 tolvas
        this.motor2_1 = resultado2;
        this.motor2_2 = resta2;

        this.resultado = '';
      } catch (e) {
        this.resultado = 'Error: entrada no válida';
      }
    } else {
      this.resultado = 'Ingrese un número';
    }
  }
}

