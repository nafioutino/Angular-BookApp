import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {

 // Class Input permet de récuperer les data de l'enfant
 // album est liée à une entrée [album] du parent dans le sélecteur
 @Input() album!:Album

  ngOnInit(): void {
  }

@Input() showDetails!:boolean;
@Output() onPlay:EventEmitter<Album> = new EventEmitter();

play(album:Album){
  this.onPlay.emit(album); // émettre un album vers le parent
}
hideAlbum(){
this.showDetails = false
}


}
