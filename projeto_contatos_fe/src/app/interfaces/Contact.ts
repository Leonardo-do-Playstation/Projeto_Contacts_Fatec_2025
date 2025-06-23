import { Category } from "./Category";


export interface Contact {
  id?: number;
  name: string;    
  phone: string;       
  email?: string | null;
  address?: string | null;
  birthDate?: string | null;
  favorite: boolean;
  company?: string | null;
  position?: string | null;
  notes?: string | null;
  category: Category; 
}
