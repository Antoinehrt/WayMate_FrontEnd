import {DtoInputAddress} from "./dto-input-address";
import {DtoInputCar} from "./dto-input-car";

export interface DtoInputProfil {
 // userType : string;
  idUser: number;
  userName : string;
  password : string;
  email : string;
  birthdate : string;
  phoneNumber: string;
  lastName: string;
  firstName : string;
  gender : string;
  address : DtoInputAddress;
 // car : DtoInputCar;


}
