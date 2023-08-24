import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class HomePage {
  constructor(private router:Router) {}

  irPrimerPunto():void{
    this.router.navigateByUrl('primer');
  }

  irSegundoPunto():void{
    this.router.navigateByUrl('segundo');
  }

  irTercerPunto():void{
    this.router.navigateByUrl('tercer');
  }

  irCuartoPunto():void{
    this.router.navigateByUrl('cuarto');
  }

  irQuintoPunto():void{
    this.router.navigateByUrl('quinto');
  }

}
