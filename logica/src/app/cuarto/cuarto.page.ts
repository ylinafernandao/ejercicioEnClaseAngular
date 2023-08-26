import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.page.html',
  styleUrls: ['./cuarto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CuartoPage implements OnInit {
  numero:string ="";
  pares:number[]=[];
  impares:number[]=[];

  constructor() { }

  ngOnInit() {
  }

  calcularPares():any{
    for(let i=0; i<=parseInt(this.numero); i++){
      if(i % 2 == 0){
        this.pares.push(i);
      }
    }
    return this.pares;
  }

  calcularImpares():any{
    for(let i=0; i<=parseInt(this.numero); i++){
      if(i % 2 == 1){
        this.impares.push(i);
      }
    }
    return this.impares;
  }

}
