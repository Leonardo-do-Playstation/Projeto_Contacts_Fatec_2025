import { Component } from '@angular/core';
import { Contact } from '../../interfaces/Contact';
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  standalone: false
})
export class ContactsComponent {
  title = "Aqui você pode visualizar todos os seus contatos cadastrados.";

  categories: Category[] = [
    { id: 1, name: 'Família' },
    { id: 2, name: 'Trabalho' },
    { id: 3, name: 'Amigos' }
  ];

  selectedCategoryId: number = 0;

  contacts: Contact[] = [
    {
      id: 1,
      name: 'Maria Silva',
      phone: '11999998888',
      email: 'maria@email.com',
      address: 'Rua A, 123',
      birthDate: '1990-01-01',
      favorite: true,
      company: 'Empresa X',
      position: 'Analista',
      notes: 'Contato importante',
      category: { id: 1, name: 'Família' }
    },
    {
      id: 2,
      name: 'João Souza',
      phone: '11888887777',
      email: 'joao@email.com',
      address: 'Rua B, 456',
      birthDate: '1985-06-15',
      favorite: false,
      company: 'Empresa Y',
      position: 'Gerente',
      notes: 'Possui restrição de horário',
      category: { id: 2, name: 'Trabalho' }
    },
    {
      id: 3,
      name: 'Ana Costa',
      phone: '11777776666',
      email: 'ana@email.com',
      address: 'Rua C, 789',
      birthDate: '1995-03-10',
      favorite: true,
      company: 'Empresa Z',
      position: 'Dev',
      notes: 'Prefere contato via WhatsApp',
      category: { id: 3, name: 'Amigos' }
    }
  ];

  selectedContact: Contact = this.createEmptyContact();

  get filteredContacts(): Contact[] {
    if (this.selectedCategoryId === 0) return this.contacts;
    return this.contacts.filter(c => c.category.id === this.selectedCategoryId);
  }

  onEdit(contact: Contact) {
    this.selectedContact = { ...contact };
  }

  onToggleFavorite(contact: Contact) {
    contact.favorite = !contact.favorite;
  }

  onSave(contact: Contact) {
    if (contact.id) {
      const index = this.contacts.findIndex(c => c.id === contact.id);
      if (index !== -1) {
        this.contacts[index] = contact;
      }
    } else {
      contact.id = this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id ?? 0)) + 1 : 1;
      this.contacts.push(contact);
    }
    this.selectedContact = this.createEmptyContact();
  }

  private createEmptyContact(): Contact {
    return {
      id: undefined,
      name: '',
      phone: '',
      email: '',
      address: '',
      birthDate: '',
      favorite: false,
      company: '',
      position: '',
      notes: '',
      category: { id: 0, name: '' }
    };
  }
}
