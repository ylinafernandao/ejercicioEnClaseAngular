import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.page.html',
  styleUrls: ['./primer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrimerPage implements OnInit {

  resultado:string[] = [];
  numero:string="";
  n1: number =  0;
  n2: number = 1;
  siguiente: number = 0;

  numeros : number[] = [];

  constructor() { }

  ngOnInit() {
  }

  calcularFibonacci():any{
    for(let i = 0 ; i < parseInt(this.numero); i++){
      this.numeros.push(this.n1);
      this.siguiente = this.n1 + this.n2;
      this.n1 = this.n2;
      this.n2 = this.siguiente;
      console.log(this.numeros[i]);
    }
    
      // this.resultado.push((this.numeros[i]).toString());
  
  }

}
