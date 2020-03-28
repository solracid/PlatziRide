import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Ride, DEFAULT_RIDE_OBJECT } from 'src/models/Ride';
import { RideService } from 'src/services/ride';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.page.html',
  styleUrls: ['./ride.page.scss'],
})
export class RidePage implements OnInit {
  ride: Ride = DEFAULT_RIDE_OBJECT;
  id: string;
  constructor(
    private rideService: RideService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.rideService.getById(this.id).subscribe((data: Ride) => {
      this.ride = data;
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  delete() {
    this.rideService.delete(this.id).subscribe( (data) => {
      alert('Eliminado con éxitos');
      this.navCtrl.pop();
    }, (error) => {
      alert('No se pudo eliminar la rodada');
      console.log(error);
    });
  }

}
