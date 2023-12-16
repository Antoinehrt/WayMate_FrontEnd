export interface DtoInputTrip {
  Id: number;
  IdDriver: number;
  Smoke: boolean;
  PriceKm: number;
  Luggage: boolean;
  PetFriendly: boolean;
  Date: Date;
  OccupiedSeats: number;
  IdStartingPoint: number;
  IdDestination: number;
}
