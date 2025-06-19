import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Contact } from '../../interfaces/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: false
})
export class ContactComponent {
  @Input() contact: Contact = {} as Contact;
  @Input() categories: Category[] = [];

  @Output() saveEventEmitter = new EventEmitter<Contact>();

  save() {
    this.saveEventEmitter.emit(this.contact);
  }
}