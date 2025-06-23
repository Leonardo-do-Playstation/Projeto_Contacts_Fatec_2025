import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/Contact';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  standalone: false
})
export class FavoritesComponent implements OnInit {
  title = "Aqui estão seus contatos marcados como favoritos para acesso rápido.";
  favoriteContacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.favoriteContacts = contacts.filter(c => c.favorite);
    });
  }

  onUnfavorite(contact: Contact): void {
    contact.favorite = false;
    this.contactService.update(contact).subscribe(() => {
      this.loadFavorites();
    });
  }
}
