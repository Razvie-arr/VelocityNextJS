import { Brand, Car, CarModel, Location } from '@prisma/client';

export interface CarWithDeps extends Car {
  model: CarModel;
  brand: Brand;
  location: Location;
}
