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

  constructor() { }

  ngOnInit() {
  }

}
