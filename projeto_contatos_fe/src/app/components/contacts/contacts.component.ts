import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/Contact';
import { Category } from '../../interfaces/Category';
import { ContactService } from '../../services/contact.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  standalone: false
})
export class ContactsComponent implements OnInit {
  title = 'Aqui você pode visualizar todos os seus contatos cadastrados.';
  contacts: Contact[] = [];
  categories: Category[] = [];

  selectedCategoryId: number = 0;
  selectedContact: Contact | null = null;

  constructor(
    private contactService: ContactService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadContacts();
    this.loadCategories();
  }

get filteredContacts(): Contact[] {
  return this.contacts.filter(contact => {
    const categoryId = contact.category?.id || 0;
    return this.selectedCategoryId === 0 || categoryId === this.selectedCategoryId;
  });
}

  loadContacts(): void {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data.filter(c => !c.favorite);
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }

  onEdit(contact: Contact) {
    this.selectedContact = { ...contact };
  }

  clearSelectedContact() {
    this.selectedContact = null;
  }

  onToggleFavorite(contact: Contact) {
    contact.favorite = !contact.favorite;
    this.contactService.update(contact).subscribe(() => {
      this.loadContacts();
    });
  }

  onSave(contact: Contact) {
    if (contact.id) {
      this.contactService.update(contact).subscribe(() => {
        this.loadContacts();
        this.clearSelectedContact();
      });
    } else {
      this.contactService.create(contact).subscribe(() => {
        this.loadContacts();
        this.clearSelectedContact();
      });
    }
  }

  onDelete(contact: Contact) {
    if (confirm(`Deseja realmente remover ${contact.name}?`)) {
      this.contactService.delete(contact.id!).subscribe(() => this.loadContacts());
    }
  }
}
