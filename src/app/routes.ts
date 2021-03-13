import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ContentComponent} from './components/content/content.component';
import {BrandComponent} from "./components/brand/brand.component";
import {CarComponent} from "./components/car/car.component";
import {ColorComponent} from "./components/color/color.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {RentalComponent} from "./components/rental/rental.component";

export const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'content', component: ContentComponent},
  {path: 'brands', component: BrandComponent},
  {path: 'cars', component: CarComponent},
  {path: 'colors', component: ColorComponent},
  {path: 'customers', component: CustomerComponent},
  {path: 'rentals', component: RentalComponent},
  {path: '', component: ContentComponent},
  { path: '**', redirectTo: 'content', pathMatch: 'full' }
];
