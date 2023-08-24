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

  constructor() { }

  ngOnInit() {
  }

}
