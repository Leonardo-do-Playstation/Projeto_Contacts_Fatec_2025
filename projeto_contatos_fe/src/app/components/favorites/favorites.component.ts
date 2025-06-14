import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/Contact';

@Component({
  selector: 'app-favorites',
  standalone: false,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent{
 title = "Aqui estão seus contatos marcados como favoritos para acesso rápido.";
  
}



