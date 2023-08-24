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

  constructor() { }

  ngOnInit() {
  }

  calcularFibonacci():void{

  }

}
