import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../../models/entityModels/car";
declare var $: any;

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  dataLoaded = false;
  cars: Car[] = [];
  error = '';

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    },error => {
      this.error = error.name;
    })
  }
}
