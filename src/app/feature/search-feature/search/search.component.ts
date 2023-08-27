import { Component } from '@angular/core';
import { PlaylistSongsService } from 'src/app/core-services/songs/playlist-songs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchString:any='';
  searchBoxes:any='';

  mixedSongs : any = [];
  topSongs : any = [];
  allSongs : any = [];
  movie : any = [];

  allMixedSongsArtists : Array<any> = [];
  allTopSongsArtists : Array<any> = [];
  allSongsArtists : Array<any> = [];

  i : number = 0;
  j : number = 0;

  constructor(private songServices:PlaylistSongsService){
    this.songServices.searchBoxes().subscribe(values =>{
      this.searchBoxes = values;
    })

    this.songServices.mixedSongsAssets().subscribe( mixedSongvalues => {
      this.mixedSongs = mixedSongvalues;
      for( this.i = 0; this.i < this.mixedSongs.length; this.i++){
        this.allMixedSongsArtists.push(this.mixedSongs[this.i]['singers_name']);
      }
      // console.log(this.allMixedSongsArtists);
    })

    this.songServices.topSongsAssets().subscribe( topSongvalues => {
      this.topSongs = topSongvalues;
      for( this.j = 0; this.j < this.topSongs.length; this.j++){
        this.movie[this.i] = this.topSongs[this.i].movieName;

        var movieString = this.movie[this.i].toString();
        var moviesSongs = this.topSongs[this.i][movieString];

        for(this.j = 0; this.j < moviesSongs.length; this.j++){
          this.allTopSongsArtists.push(moviesSongs[this.j]['singers_name']);
          // console.log(this.allTopSongsArtists)
        }
        // console.log(this.allTopSongsArtists)
      }
    })
    this.allSongsArtists.push(this.allTopSongsArtists,this.allMixedSongsArtists);
    // console.log(this.allSongsArtists);
  }

  public keywords = [
    {artistName:'Harris Jeyaraj'},
    {artistName:'Anirudh Ravichander'},
    {artistName:'G.V.Prakash'},
    {artistName:'Santhosh Narayanan'},
    {artistName:'Vijay Antony'},
    {artistName:'Yuvan shankar raja'},
    {artistName:'Vijay'},
    {artistName:'Rahman'}
  ];

}
