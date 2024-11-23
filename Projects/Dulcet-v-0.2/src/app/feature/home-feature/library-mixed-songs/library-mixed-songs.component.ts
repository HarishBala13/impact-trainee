import { Component } from '@angular/core';
import { PlaylistSongsService } from 'src/app/core-services/songs/playlist-songs.service';

@Component({
  selector: 'app-library-mixed-songs',
  templateUrl: './library-mixed-songs.component.html',
  styleUrls: ['./library-mixed-songs.component.css']
})

export class LibraryMixedSongsComponent {

  mixedSongs: any = [];
  mixedSongsAssets: any = '';
  openSongTracker: boolean | string | null = false;
  currentTrackIndex: number = 0;
  audiosrc: string = '';
  imagepath: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqivTclWTRsA-05BfrWrWb6Q0IJv3TW2RWgg&usqp=CAU';
  maintitle: string = 'OCEANIC SPACE';
  subtitle: string = 'A Breath of Fresh Air';
  songID: number = 0;
  toggle = true;
  status = 'Enable';
  i: number = 0;
  j: number = 0;
  index: number = 0;
  movie: any = '';

  private audioPlayer: HTMLAudioElement | undefined;

  constructor(private songService: PlaylistSongsService) {
    this.songService.mixedSongsAssets().subscribe((values: any) => {
      this.mixedSongsAssets = values;

      for (this.i = 0; this.i < values.length; this.i++) {
        this.mixedSongs[this.i] = values[this.i]['audios'];
      }

      this.audioPlayer = new Audio();
      this.audioPlayer.src = this.mixedSongs[this.currentTrackIndex];

    });
  }

  loadAudio(audioObject: any) {
    if (sessionStorage.getItem("isUserLoggedIn") == "true") {
      sessionStorage.setItem("songTrackLocalStorage", "true");

      this.openSongTracker = sessionStorage.getItem("songTrackLocalStorage");
      this.audiosrc = audioObject.audios;
      this.imagepath = audioObject.images;
      this.maintitle = audioObject.movie_name;
      this.subtitle = audioObject.song_name;
      this.songID = audioObject.id;
    }
    else {
      // this.AL.Error("You can't hear this song right now. Please login to hear the song");
    }
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
      const nextSongLoad = this.mixedSongs[this.songID];
      console.log(nextSongLoad)
      this.audioPlayer.src = nextSongLoad;
      this.audioPlayer?.play();
      let masterPlay = document.getElementById("masterplay");
      masterPlay?.classList.remove("wave");
      masterPlay?.classList.add("wave");
    }
  }

  previousSong() { }


  addToLike() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }


}
