import { Component, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from 'projects/logger-file/src/lib/logger.service';
import { AlertifyService } from 'src/app/core-services/alertifyjs/alertify.service';
import { PlaylistSongsService } from 'src/app/core-services/songs/playlist-songs.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})

export class PlaylistsComponent {
  openSongTracker : string | null | undefined= "";
  openAnotherPlaylist : boolean = false;
  openNewPlaylist : boolean = false;
  openUserPlaylistDiv : boolean = false;
  openLEODiv : boolean = false;
  openVikramIIDiv : boolean = false;
  userPlaylist : boolean = false;
  openPlaylistDiv : boolean = false;
  openAddedButton : boolean = false;
  toggled = true;
  toggle = true;
  status = 'Enable';
  statuses = 'Enable';
  count: number = 0;

  profileName : string | null | undefined ='';
  moviesongs : any;
  JSONID : any = ""
  movieNamesArray : any = "";

  oldSongID: number = 0;
  i : number = 0;
  j : number = 0;
  index : number = 0;
  songIndex : number = 0;
  currentTrackIndex : number = 0;

  audiosrc:any='';
  imagepath:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqivTclWTRsA-05BfrWrWb6Q0IJv3TW2RWgg&usqp=CAU';
  maintitle:string='OCEANIC SPACE';
  subtitle:string='A Breath of Fresh Air';

  allPlaylistSongs : any = [];
  allLibrariesSongs : any = [];
  createPlaylistSongs : any = [];
  movie : any = [];
  allSongsArray : any = [];
  leoSongsAssets = [];
  vikramSongsAssets = [];
  leoAudios = [];
  vikramAudios = [];
  allAudios = [];
  playlistTracks : any = [];
  usersPlaylist : any = [];
  toBeShuffledPlaylist : any = [];

  audioPlayer  : HTMLAudioElement | undefined;

  constructor(private alertifyService:AlertifyService,
    private router:Router,
    private songService:PlaylistSongsService,
    private loggerFileService:LoggerService){
    this.profileName = sessionStorage.getItem('currentUserName');
    this.JSONID = sessionStorage.getItem('currentUserJSONID');

/**********************************Audio play,pause and shuffling of src values Starts here******************************/

    songService.topSongsAssets().subscribe((values:any)=>{
      for(this.i=0; this.i < values.length; this.i++){
        this.movie[this.i] = values[this.i].movieName;

        var movieString = this.movie[this.i].toString();
        var moviesSongs = values[this.i][movieString];
        for(this.j = 0; this.j < moviesSongs.length; this.j++){
          this.allLibrariesSongs.push(moviesSongs[this.j]);
        }
      }

      for(this.index=0; this.index<this.allLibrariesSongs.length; this.index++){
        this.allSongsArray[this.index] = this.allLibrariesSongs[this.index].audios;
      }

      this.allAudios = this.allSongsArray;
      this.loggerFileService.log(movieString);
      this.leoAudios = this.allSongsArray.slice(0, 2);
      this.vikramAudios = this.allSongsArray.slice(2, 15);

      this.allPlaylistSongs = this.allLibrariesSongs.slice(0, 17);
      this.leoSongsAssets = this.allLibrariesSongs.slice(0, 2);
      this.vikramSongsAssets = this.allLibrariesSongs.slice(2, 15);

      this.audioPlayer = new Audio();
      this.audioPlayer.src = this.allAudios[this.currentTrackIndex];
    });
  }

  loadAudio(audioObject:any){

    if(sessionStorage.getItem("isUserLoggedIn")=="true"){
      sessionStorage.setItem("songTrackLocalStorage","true");
      this.openSongTracker = sessionStorage.getItem("songTrackLocalStorage");
      this.audiosrc = audioObject.audios;
      this.imagepath = audioObject.images;
      this.maintitle = audioObject.movie_name;
      this.subtitle = audioObject.song_name;
    }
    else{
      this.alertifyService.Error("You can't hear this song right now. Please login to hear the song");
    }
  }


  playSong(){
    if(this.audioPlayer?.src){
      const currentSongClicked = this.audiosrc;
      this.audioPlayer.src = currentSongClicked;
      this.audioPlayer?.play();
      let masterPlay=document.getElementById("masterplay");
      masterPlay?.classList.add("wave");
    }
  }

  pauseSong(){
    if(this.audioPlayer?.src){
      const currentSongClicked = this.audiosrc;
      this.audioPlayer.src = currentSongClicked;
      this.audioPlayer?.pause();
      let masterPlay=document.getElementById("masterplay");
      masterPlay?.classList.remove("wave");
    }
  }

  nextSong(){

    if(this.openLEODiv == true){

      if(this.audioPlayer?.src){
        const nextSongLoad = this.allAudios[this.audiosrc + 1];
        this.audioPlayer.src = nextSongLoad;
        this.audioPlayer?.play();
        let masterPlay=document.getElementById("masterplay");
        masterPlay?.classList.add("wave");
      }

    }
    else if(this.openVikramIIDiv == true){
      this.currentTrackIndex = (this.currentTrackIndex + 1) % this.vikramAudios.length;
      console.log(this.currentTrackIndex);
      console.log( this.currentTrackIndex = (this.currentTrackIndex + 1) % this.leoAudios.length)

     }
}

  previousSong(){
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.allAudios.length) % this.allAudios.length;
    if(this.audioPlayer?.src){
      this.audioPlayer.src = this.allAudios[this.currentTrackIndex];
    this.audioPlayer?.play();
    }
  }

  shufflePlaylist(){

    if(this.openLEODiv == true){
      this.toBeShuffledPlaylist = this.leoSongsAssets;
    }
    else if(this.openVikramIIDiv == true){
      this.toBeShuffledPlaylist = this.vikramSongsAssets;
    }
    else if(this.userPlaylist == true){
      this.toBeShuffledPlaylist = this.userPlaylist;
    }
    for(var i=this.toBeShuffledPlaylist.length-1; i>0; i--){
      let j = Math.floor(Math.random() * (i+1));
      let temp = this.toBeShuffledPlaylist[i];
      this.toBeShuffledPlaylist[i] = this.toBeShuffledPlaylist[j];
      this.toBeShuffledPlaylist[j] = temp;
    }
  }

  unShufflePlaylist(){
    if(this.openLEODiv == true){
      this.leoSongsAssets = this.leoSongsAssets;
    }
    else if(this.openVikramIIDiv == true){
      this.vikramSongsAssets = this.vikramSongsAssets;
    }
    else if(this.userPlaylist == true){
      this.userPlaylist = this.userPlaylist;
    }

  }

  /**********************************Audio play,pause and shuffling of src values Ends here***********************************/


  /******************************* Boolean DIVs Open and Close Methods Starts here*******************************/

  createPlaylist(){
    this.openNewPlaylist = true;
    this.openVikramIIDiv = false;
    this.openLEODiv = false;
  }

  createAnotherPlaylist(){
    this.openAnotherPlaylist = true;
    this.openVikramIIDiv = false;
    this.openLEODiv = false;
  }

  openPlaylist(){
    this.openPlaylistDiv = true;
    this.openVikramIIDiv = false;
    this.openLEODiv = false;
  }

  openUserPlaylist(){
    this.songService.getUserPlaylist().subscribe(values => {
      this.playlistTracks = values;
      this.usersPlaylist = this.playlistTracks.myPlaylist_1;

      if(this.playlistTracks.myPlaylist_1 == undefined){
        this.userPlaylist = false;
        this.alertifyService.Error("No Playlist available Create a new one")
      }
      else{
        this.userPlaylist = true;
        this.openPlaylistDiv = false;
        this.openVikramIIDiv = false;
        this.openLEODiv = false;
        this.openNewPlaylist = false;
      }
    })
  }

  closePlaylist(){
    this.openNewPlaylist = false;
    this.openVikramIIDiv = false;
    this.openLEODiv = false;
    this.openPlaylistDiv = false;
  }

  closeAnotherPlaylist(){
    this.openAnotherPlaylist = false;
    this.openNewPlaylist = false;
    this.openVikramIIDiv = false;
    this.openLEODiv = false;
    this.openPlaylistDiv = false;
  }

  openLEOPlaylist(){
    this.openLEODiv = true;
    this.openVikramIIDiv = false;
    this.openNewPlaylist = false;
    this.openPlaylistDiv = false;
    this.userPlaylist = false;
  }

  openVikramPlaylist(){
    this.openVikramIIDiv = true;
    this.openLEODiv = false;
    this.openNewPlaylist = false;
    this.openPlaylistDiv = false;
    this.userPlaylist = false;
  }

  /**********************************Boolean DIVs Open and Close Methods Ends here**************************************/


  addToLike() {
    this.toggle = !this.toggle;
    this.statuses = this.toggle ? 'Enable' : 'Disable';
  }

  addToFavouritesSongs(songsObject:any){
    console.log("touched"+this.toggled+" "+this.status);
    this.toggled = ! this.toggled;
    this.status = this.toggled ? 'Disable' : 'Enable';
    this.songService.addToFavouritesSongsFromPlaylist(songsObject,this.JSONID);
  }

  addSongsToPlaylist(playlistSongs:any,index:any){
    this.songService.addSongsToUserPlaylist(playlistSongs,this.JSONID);
    this.openAddedButton = true;
  }



}
