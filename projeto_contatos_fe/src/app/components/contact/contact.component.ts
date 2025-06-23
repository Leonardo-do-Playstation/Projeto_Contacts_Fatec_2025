import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Contact } from '../../interfaces/Contact';
import { Category } from '../../interfaces/Category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: false
})
export class ContactComponent implements OnChanges {
  @Input() contact: Contact = this.createEmptyContact();
  
  @Input() categories: Category[] = [];
  
  @Output() saveEventEmitter = new EventEmitter<Contact>();

  categoryId: number | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contact'] && changes['contact'].currentValue) {
      this.contact = { ...changes['contact'].currentValue };
      this.categoryId = this.contact.category?.id ?? null;
    }
  }

  save(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const selectedCategory = this.categories.find(cat => cat.id === this.categoryId);
    if (!selectedCategory) {
      alert('Categoria inválida.');
      return;
    }
    this.contact.category = selectedCategory;

    if (this.contact.email === '') this.contact.email = null;
    if (this.contact.address === '') this.contact.address = null;
    if (this.contact.birthDate === '') this.contact.birthDate = null;
    if (this.contact.company === '') this.contact.company = null;
    if (this.contact.position === '') this.contact.position = null;
    if (this.contact.notes === '') this.contact.notes = null;

    this.saveEventEmitter.emit(this.contact);
    this.contact = this.createEmptyContact();
    this.categoryId = null;
  }

  private createEmptyContact(): Contact {
    return {
      name: '',
      phone: '',
      email: null,
      address: null,
      birthDate: null,
      favorite: false,
      company: null,
      position: null,
      notes: null,
      category: { id: 0, name: '' }
    };
  }
}
