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

  constructor() { }

  ngOnInit() {
  }

}
