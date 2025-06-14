import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
