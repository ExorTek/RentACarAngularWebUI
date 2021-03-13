import {ResponseModel} from "./responseModel";
import {Customer} from "../entityModels/customer";

export interface CustomerResponseModel extends ResponseModel {
  data: Customer[];
}
