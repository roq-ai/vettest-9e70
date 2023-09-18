import { PetInterface } from 'interfaces/pet';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string;
  created_at?: any;
  updated_at?: any;
  pet?: PetInterface[];

  _count?: {
    pet?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  phone_number?: string;
}
