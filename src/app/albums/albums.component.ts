import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit {
  titlePage: string = 'Page principal Albums Music';
  albums: Album[] = ALBUMS;
  onSelect(album: Album): void {
    this.selectedAlbum = album;
    this.show = true
  }

  selectedAlbum: any = this.albums.find((album:Album) => album.id == "1");
  show:boolean = true
  playParent(album:Album){
      album.tags?.push('Play')
  }

  ngOnInit(): void {}
}
