/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentvalues } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistSongsService {

  likedSongsProperty:any='';
  userAddSongsProperty:any='';
  subscribedPlansProperty:any='';

  myLikedSongsArray:any = [];
  userExistingPlaylist:any = [];
  myPremiumPlansArray:any =[];

  jsonID:any='';

  constructor(private _http:HttpClient) { }

  mixedSongsAssets(){
    return this._http.get(environmentvalues.mixed_songs_url);
  }

  topSongsAssets(){
    return this._http.get(environmentvalues.top_songs_url);
  }

  searchBoxes(){
    return this._http.get(environmentvalues.searchboxes_url);
  }

  addToFavouritesSongsFromPlaylist(songsObject:any,JSONID:any){
    this.myLikedSongsArray = {
      movie_name:songsObject.movie_name,
      song_name:songsObject.song_name,
      images:songsObject.images,
      audios:songsObject.audios,
      id:songsObject.id
    };

    this._http.get(environmentvalues.user_registration_url).subscribe((values:any) =>{
      const addSongs = values.find((values_1:any) => {
        if(values_1.id == JSONID){
          this.likedSongsProperty = values_1;
          return this.likedSongsProperty;
        }
      })
      if(addSongs){
        if(this.likedSongsProperty.likedSongs != null){
          this.likedSongsProperty.likedSongs.push(this.myLikedSongsArray);
          this._http.patch(environmentvalues.user_registration_url+"/"+JSONID,{likedSongs:this.likedSongsProperty.likedSongs}).subscribe(values=>{});
        }
        else{
          this._http.patch(environmentvalues.user_registration_url+"/"+JSONID,{likedSongs:[this.myLikedSongsArray]}).subscribe(values=>{});
        }
      }
    })
  }

  addSongsToUserPlaylist(playlistObject:any, JSONID:any){

    this.userAddSongsProperty = {
      movie_name : playlistObject.movie_name,
      song_name : playlistObject.song_name,
      images : playlistObject.images,
      audios : playlistObject.audios,
      id : playlistObject.id
    }

    this._http.get(environmentvalues.user_registration_url+"/"+this.jsonID).subscribe(y => {
      this.userExistingPlaylist = y;
      if(this.userExistingPlaylist.userPlaylist != null){
        this.userExistingPlaylist.myPlaylist_1.push(this.userAddSongsProperty);
        this._http.patch(environmentvalues.user_registration_url+"/"+this.jsonID,{ myPlaylist_1: this.userExistingPlaylist.myPlaylist_1 }).subscribe(values => {});
      }
      else{
        this._http.patch(environmentvalues.user_registration_url+"/"+this.jsonID,{ myPlaylist_1: [this.userAddSongsProperty]}).subscribe(values => {});
      }
    });
  }

  addSongsToAnotherPlaylist(playlistSongsObject:any, JSONID:any){

    this.userAddSongsProperty = {
      movie_name : playlistSongsObject.movie_name,
      song_name : playlistSongsObject.song_name,
      images : playlistSongsObject.images,
      audios : playlistSongsObject.audios,
      id : playlistSongsObject.id
    };

    this._http.get(environmentvalues.user_registration_url+"/"+JSONID).subscribe(y => {
      this.userExistingPlaylist = y;
      if(this.userExistingPlaylist.myPlaylist_2 != null){
        this.userExistingPlaylist.myPlaylist_2.push(this.userAddSongsProperty)
        this._http.patch(environmentvalues.user_registration_url+"/"+JSONID,{ myPlaylist_2: this.userExistingPlaylist.myPlaylist_2 }).subscribe(values => {});
      }
      else{
        this._http.patch(environmentvalues.user_registration_url+"/"+JSONID,{ myPlaylist_2: [this.userAddSongsProperty]}).subscribe(values => {});
      }
    });
  }

  getUserPlaylist(){
    return this._http.get(environmentvalues.user_registration_url+"/"+this.jsonID);
  }

  userPlayedSongsHistory(songDetails:any,time:any){  }

}
