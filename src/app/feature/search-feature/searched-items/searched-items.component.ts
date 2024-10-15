/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Component } from '@angular/core';
import { PlaylistSongsService } from 'src/app/core-services/songs/playlist-songs.service';

@Component({
  selector: 'app-searched-items',
  templateUrl: './searched-items.component.html',
  styleUrls: ['./searched-items.component.css']
})
export class SearchedItemsComponent {

  searchString: string = "";

  onSearchTextEntered(searchValue:string){
    this.searchString = searchValue;
    // console.log(this.searchString);
  }

}

/**
Finding unique singers name without using in-built functions

  for(this.i=0; this.i<this.allSongsArtists.length; this.i++){
      if(this.allSongsArtists[this.i].includes(',')){
        for(this.j=0; this.j<this.allSongsArtists[this.i].split(',').length; this.j++){
          this.allNames.push(this.allSongsArtists[this.i].split(',')[this.j]);
        }
      }
      }
      const seen: { [key: string]: boolean } = {};
      for(this.j=0; this.j<this.allNames.length; this.j++){
        const item = this.allNames[this.j];
        if(!seen[item]){
          this.uniqueArray.push(item);
          seen[item] = true;
        }
        if(this.uniqueArray.indexOf(this.allNames[this.j]) === -1){
          this.uniqueArray.push(this.allNames[this.j])
        }
      }
 */
