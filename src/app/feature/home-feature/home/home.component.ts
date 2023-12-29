import { Component, reflectComponentType, ViewEncapsulation } from '@angular/core';
import { LoggerService } from 'projects/logger-file/src/public-api';
import { PlaylistSongsService } from 'src/app/core-services/songs/playlist-songs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent {
  selectorArray:any = [];
  date : any = '';
  songsAssets : any = "";
  loadAudio(songs:any){}
  constructor(private loggerService:LoggerService, private songService:PlaylistSongsService) {
    const metadata = reflectComponentType(HomeComponent);
    const selectorRefname = metadata?.selector;
    this.selectorArray = selectorRefname;
    const selector = this.selectorArray.slice(4);
    this.date = new Date();
    console.log(this.date.toDateString());
    this.loggerService.informationMessage(selector,"info",this.date.toDateString());

    this.songService.mixedSongsAssets().subscribe((x:any) => {
      this.songsAssets = x;
    });
  }

}
