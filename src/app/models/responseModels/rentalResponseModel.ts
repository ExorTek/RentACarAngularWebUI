import {Rental} from "../entityModels/rental";
import {ResponseModel} from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
  data: Rental[];
}
