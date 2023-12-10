import {DtoInputAddress} from "./dto-input-address";

export interface DtoInputProfil {
  idAccount : number;
  firstName : string;
  lastName : string;
  email : string;
  pictureURL : string;
  phone: string;
  address : DtoInputAddress;
  function : string;
}
