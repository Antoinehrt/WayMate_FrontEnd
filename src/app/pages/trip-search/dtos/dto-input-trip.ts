export interface DtoInputTrip {
  id: number;
  idDriver: number;
  smoke: boolean;
  priceKm: number;
  luggage: boolean;
  petFriendly: boolean;
  date: Date;
  occupiedSeats: number;
  idStartingPoint: number;
  idDestination: number;
}
