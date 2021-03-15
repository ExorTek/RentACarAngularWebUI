import {Component, OnInit, Output} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../../models/entityModels/car";
import {ActivatedRoute} from "@angular/router";
import {BrandService} from '../../services/brand.service';
import {Brand} from '../../models/entityModels/brand';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  dataLoaded = false;
  cars: Car[] = [];
  brands: Brand[] = [];
  // @ts-ignore
  currentBrand: Brand;
  error = '';
  constructor(private carService: CarService, private brandService:BrandService,private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarDetailsByBrandId(params["brandId"])
      } else {
        this.getCarDetails();
      }
    })
    this.getBrands();
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    }, error => {
      this.error = error.name;
    })
  }

  getCarDetailsByBrandId(brandId: number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    }, error => {
      this.error = error.name;
    })
  }

  setCurrentCar(brand: Brand) {
    this.currentBrand = brand;
    console.log(this.currentBrand);
  }

  // getCurrentCarClass(car: Car) {
  //   if (car == this.currentCar) {
  //     return "list-group-item active"
  //   } else {
  //     return "list-group-item"
  //   }
  // }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    },error=>{
      this.error = error.name;
    })
  }
}
