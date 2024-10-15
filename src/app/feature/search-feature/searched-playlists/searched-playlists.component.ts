/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistSongsService } from 'src/app/core-services/songs/playlist-songs.service';

@Component({
  selector: 'app-searched-playlists',
  templateUrl: './searched-playlists.component.html',
  styleUrls: ['./searched-playlists.component.css'],
})
export class SearchedPlaylistsComponent implements OnInit {

  searchedArtist : string | null = '';
  i : number = 0;
  j : number = 0;
  k : number = 0;
  l : number = 0;
  m : number = 0;
  n : number = 0;
  hoveredIndex : number | null = null;
  userSearchedSingersPlaylist : Array<any> = [];
  allLibrariesSongs: any = [];
  movie: any = [];
  totalDuration : string = '';
  randomAssets : Array<any> = [];
  selectedPlayListType: [string, string] | null = null;
  isContainerOpened : boolean = false;

  playListListType = [
    {
      name: 'List',
      icon: 'fa-solid fa-list'
    },
    {
      name: 'Compact',
      icon: 'fa-solid fa-bars'
    }
  ];

  constructor(private activatedRoute: ActivatedRoute,private songService:PlaylistSongsService) {

    songService.topSongsAssets().subscribe((values:any) => {
      for (this.i = 0; this.i < values.length; this.i++) {
        this.movie[this.i] = values[this.i].movieName;
        var movieString = this.movie[this.i].toString();
        var movieSongs = values[this.i][movieString];
        for (this.j = 0; this.j < movieSongs.length; this.j++) {
          this.allLibrariesSongs.push(movieSongs[this.j]);
        }
      }
      for(this.k = 0; this.k < this.allLibrariesSongs.length; this.k++){
        if(this.allLibrariesSongs[this.k]['singers_name'].includes(this.searchedArtist)){
          this.userSearchedSingersPlaylist.push(this.allLibrariesSongs[this.k]);
        }
      }
    });

    songService.mixedSongsAssets().subscribe((mixedSongsAssets:any) => {
      for(this.l = 0; this.l < mixedSongsAssets.length; this.l++){
        if(mixedSongsAssets[this.l]['singers_name'].includes(this.searchedArtist)){
          this.userSearchedSingersPlaylist.push(mixedSongsAssets[this.l]);
        }
      }

      for(this.n = 0; this.n <= 3; this.n++){
        // let randomIndex = Math.floor(Math.random() * (26 - 0 + 1) + 0);
        // console.log(randomIndex);
        this.randomAssets.push(this.userSearchedSingersPlaylist[this.n]['images'])
      }

      let totalSeconds = 0;
      for(this.m = 0; this.m < this.userSearchedSingersPlaylist.length; this.m++){
        const timeParts = this.userSearchedSingersPlaylist[this.m]['duration'].split(':');
        const minutes = parseInt(timeParts[0], 10);
        const seconds = parseInt(timeParts[1], 10);
        totalSeconds += (minutes * 60) + seconds;
        }

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        this.totalDuration = `${this.pad(hours)} hr ${this.pad(minutes)} min ${this.pad(seconds)} sec`;
        // console.log(this.totalDuration);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.searchedArtist = params.get('searchedArtist');
    });
  }

  pad(num: number): string {
    return num.toString().padStart(2, '0');
  }

  selectPlayListType(itemName: string, itemIcon: string): void {
    this.selectedPlayListType = [itemName, itemIcon];
    this.isContainerOpened = false;
  }

  containerOpened(){
    this.isContainerOpened = true;
  }

  showPlayIcon(index:number){
    this.hoveredIndex = index;
  }

  hidePlayIcon(index:number){
    if(this.hoveredIndex === index){
      this.hoveredIndex = null;
    }
  }
}
