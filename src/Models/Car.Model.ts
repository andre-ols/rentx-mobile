import { Accessory } from './Accessoty.model';
import { Rent } from './Rent.model';

export interface Car {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: Rent;
  fuel_type: string;
  thumbnail: string;
  accessories: Accessory[];
  photos: string[];
}
