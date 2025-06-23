import { Component } from '@angular/core';
import { Contact } from '../../interfaces/Contact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/Category';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent {
  categories: Category[] = [];

  constructor(
    private contactService: ContactService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(cats => this.categories = cats);
  }

  onSaveContact(contact: Contact) {
    const category = this.categories.find(c => c.id === +contact.category.id);
    if (category) {
      contact.category = category;
    }

   this.contactService.create(contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
