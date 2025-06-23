import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Contact } from '../../interfaces/Contact';
import { Category } from '../../interfaces/Category';

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contact'] && changes['contact'].currentValue) {
      this.contact = { ...changes['contact'].currentValue };
    }
  }

  save() {
    this.saveEventEmitter.emit(this.contact);
    this.contact = this.createEmptyContact();
  }

  private createEmptyContact(): Contact {
    return {
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
