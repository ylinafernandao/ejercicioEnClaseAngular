import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tercer',
  templateUrl: './tercer.page.html',
  styleUrls: ['./tercer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TercerPage implements OnInit {

  numero: string = "";
  // primo: boolean = true;
  // n: number = 2;
  primos: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  calcularPrimos(): any {
    // for (let i = 1; i < parseInt(this.numero); i++) {

    //   while (this.primo == true && this.n < parseInt(this.numero)) {
    //     if (i % this.n == 0) {
    //       this.primo = false;
    //     } else {
    //       this.n++;
    //     }
    //   }

    //   if (this.primo == true) {
    //     console.log(i);
    //     this.primos.push(i);
    //   }

    //   this.primo = true;
    // }
    // return this.primos;

    for(let i = 2; i < parseInt(this.numero); i++){
      let primo = true;

      for(let resto = 2; resto < i; resto++){
        if(i % resto === 0){
          primo = false;
        } 
      }
      
      if(primo == true){
        this.primos.push(i);
      }
    }
    return this.primos;
  }


}
