import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.page.html',
  styleUrls: ['./segundo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SegundoPage implements OnInit {

  numero:string = "";
  resultado:string = "";
  n1:number = 1;

  constructor() { }

  ngOnInit() {
  }

  calcularFactorial():any{
    for(let i = 2; i <= parseInt(this.numero); i++){
      this.n1 = this.n1 * i;
    }
    console.log(this.n1);
    return this.n1;
  }

}
