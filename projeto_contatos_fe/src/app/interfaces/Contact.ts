import { Category } from "./Category";


export interface Contact {
  id?: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  birthDate: string; 
  favorite: boolean;
  company: string;
  position: string;
  notes: string;
  category: Category;
}
