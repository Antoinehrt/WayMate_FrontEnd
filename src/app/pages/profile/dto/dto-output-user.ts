export interface DtoOutputUser {
  id: number;
  username: string;
  userType: string;
  password: string;
  email: string;
  birthdate: Date;
  isBanned: string;
  phoneNumber: string;
  lastName: string; // ajusté à "lastName"
  firstName: string; // ajusté à "firstName"
  gender: string;
  addressId: number;
  carPlate: string;
}
