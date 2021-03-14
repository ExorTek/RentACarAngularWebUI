import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../../models/entityModels/car";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  dataLoaded = false;
  cars: Car[] = [];
  // @ts-ignore
  currentCar: Car;
  error = '';

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getCarDetailsById(params["id"])
      } else {
        this.getCarDetails();
      }
    })
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    }, error => {
      this.error = error.name;
    })
  }

  getCarDetailsById(id: number) {
    this.carService.getCarDetailsById(id).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    }, error => {
      this.error = error.name;
    })
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  getCurrentCarClass(car: Car) {
    if (car == this.currentCar) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
}
