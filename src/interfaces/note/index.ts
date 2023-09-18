import { PetInterface } from 'interfaces/pet';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  content: string;
  timestamp?: any;
  pet_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  pet?: PetInterface;
  user?: UserInterface;
  _count?: {};
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  pet_id?: string;
  user_id?: string;
}
