import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books = [
    {id:1, title:"Sous l'Orage", author:"Seydou Badian", statut:"terminé" },
    {id:2, title:"Angular", author:"Melchior", statut:"en cours" },
    {id:3, title:"Laravel", author:"Tiburce", statut:"terminé" },
    {id:4, title:"Vue Js", author:"Sahid", statut:"en attente" },
    {id:5, title:"PHP", author:"Augustin", statut:"en cours" },
    {id:6, title:"CSS", author:"Tomy", statut:"terminé" },
  ]
}
