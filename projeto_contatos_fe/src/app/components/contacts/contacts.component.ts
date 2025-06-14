import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent{
  title = "Aqui você pode visualizar todos os seus contatos cadastrados.";
}
