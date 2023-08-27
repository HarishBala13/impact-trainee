import { Component } from '@angular/core';
import { PlaylistSongsService } from 'src/app/core-services/songs/playlist-songs.service';

@Component({
  selector: 'app-library-top-songs',
  templateUrl: './library-top-songs.component.html',
  styleUrls: ['./library-top-songs.component.css']
})
export class LibraryTopSongsComponent {

  topSongs: any = [];
  openSongTracker: boolean | string | null = false;
  currentTrackIndex: number = 0;
  i: number = 0;
  j: number = 0;
  k: number = 0;
  songID: number = 0;
  audiosrc: string = '';
  imagepath: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqivTclWTRsA-05BfrWrWb6Q0IJv3TW2RWgg&usqp=CAU';
  maintitle: string = 'OCEANIC SPACE';
  subtitle: string = 'A Breath of Fresh Air';
  toggle = true;
  status = 'Enable';
  movie: any = [];
  allLibrariesSongs: any = [];

  private audioPlayer: HTMLAudioElement | undefined;
  topSongsAssets: any = '';

  constructor(private songService: PlaylistSongsService) {
    this.songService.topSongsAssets().subscribe((values: any) => {
      this.topSongsAssets = values;

      for(this.i=0; this.i < values.length; this.i++){
        this.movie[this.i] = values[this.i].movieName;

        var movieString = this.movie[this.i].toString();
        var moviesSongs = values[this.i][movieString];
        for(this.j = 0; this.j < moviesSongs.length; this.j++){
          this.allLibrariesSongs.push(moviesSongs[this.j]);
        }
      }

      for (this.k = 0; this.k < values.length; this.k++) {
        this.topSongs[this.k] = values[this.k]['audios'];
      }

      this.audioPlayer = new Audio();
      this.audioPlayer.src = this.topSongs[this.currentTrackIndex];
    })
  }

  playSong() {
    if (this.audioPlayer?.src) {
      const currentSongClicked = this.audiosrc;
      this.songID;
      this.audioPlayer.src = currentSongClicked;
      this.audioPlayer?.play();
      let masterPlay = document.getElementById("masterplay");
      masterPlay?.classList.add("wave");
    }
  }

  pauseSong() {
    if (this.audioPlayer?.src) {
      const currentSongClicked = this.audiosrc;
      this.audioPlayer.src = currentSongClicked;
      this.audioPlayer?.pause();
      let masterPlay = document.getElementById("masterplay");
      masterPlay?.classList.remove("wave");
    }
  }

  nextSong() {
    if (this.audioPlayer?.src) {
      const nextSongLoad = this.topSongs[this.songID];
      console.log(nextSongLoad)
      this.audioPlayer.src = nextSongLoad;
      this.audioPlayer?.play();
      let masterPlay = document.getElementById("masterplay");
      masterPlay?.classList.remove("wave");
      masterPlay?.classList.add("wave");
    }
  }

  previousSong() { }

  loadAudio(audioObject: any) {
    if (sessionStorage.getItem("isUserLoggedIn") == "true") {
      sessionStorage.setItem("songTrackLocalStorage", "true");
      this.openSongTracker = sessionStorage.getItem("songTrackLocalStorage");
      this.audiosrc = audioObject.audios;
      this.imagepath = audioObject.images;
      this.maintitle = audioObject.maintitle;
      this.subtitle = audioObject.subtitle;
      this.songID = audioObject.id;
    }
    else {
      // this.AL.Error("You can't hear this song right now. Please login to hear the song");
    }
  }

  addToLike() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

}
