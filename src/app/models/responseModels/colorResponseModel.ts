import {ResponseModel} from "./responseModel";
import {Color} from "../entityModels/color";

export interface ColorResponseModel extends ResponseModel {
  data: Color[];
}
