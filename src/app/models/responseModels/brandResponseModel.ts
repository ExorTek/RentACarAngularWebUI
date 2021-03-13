import {ResponseModel} from "./responseModel";
import {Brand} from "../entityModels/brand";

export interface BrandResponseModel extends ResponseModel {
  data: Brand[];
}
