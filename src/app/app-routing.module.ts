import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { BooksComponent } from './books/books.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RemoteComponent } from './maps/remote/remote.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'maps', component: MapsComponent, children: [
    {path: 'remote', component: RemoteComponent}
  ]},
  {path: 'books', component: BooksComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
