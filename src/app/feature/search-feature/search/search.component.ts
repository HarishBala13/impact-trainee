/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistSongsService } from 'src/app/core-services/songs/playlist-songs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchString: string = '';
  searchedArtist: string = '';
  searchBoxes: any = '';

  movie: any = [];
  allMixedSongsArtists: string[] = [];
  allTopSongsArtists: string[] = [];
  allSongsArtists: string[] = [];
  artists: string[] = [];

  i: number = 0;
  j: number = 0;

  constructor(private songServices:PlaylistSongsService, private router:Router){
    this.songServices.searchBoxes().subscribe((values) => {
      this.searchBoxes = values;
    });

    this.songServices.mixedSongsAssets().subscribe((mixedSongvalues:any) => {
      for (this.i = 0; this.i < mixedSongvalues.length; this.i++) {
        this.allMixedSongsArtists.push(mixedSongvalues[this.i]['singers_name']);
      }
    });

    this.songServices.topSongsAssets().subscribe((topSongvalues: any) => {
      console.log('topSongvalues :>> ', topSongvalues);
      for (this.i = 0; this.i < topSongvalues.length; this.i++) {
        this.movie[this.i] = topSongvalues[this.i].movieName;

        var movieString = this.movie[this.i].toString();
        var moviesSongs = topSongvalues[this.i][movieString];

        for (this.j = 0; this.j < moviesSongs.length; this.j++) {
          this.allTopSongsArtists.push(moviesSongs[this.j]['singers_name']);
        }
      }

      this.allSongsArtists = [...this.allMixedSongsArtists,...this.allTopSongsArtists]

      const uniqueValues = [...new Set(this.allSongsArtists.flatMap(item => item.split(',').map(name => name.trim())))];
      this.artists = uniqueValues;

    });
  }


  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchString);
  }

  onSearchedArtist(artist:string){
    this.searchedArtist = artist;
    // console.log(artist);
    this.router.navigate(['/searched-playlists',this.searchedArtist]);
  }
}

/*
    for(this.j=-0; this.j<artists.length; this.j++){
            let isUnique = true;
            for(this.k=0; this.k<this.uniqueArray.length; this.k++){
              if(artists[this.j] === this.uniqueArray[this.k]){
                isUnique = false;
                break;
              }
            }
            if(isUnique){
              this.uniqueArray.push(names[this.j]);
            }
          }
*/
