package comdulcetapplication;

/*
@title			Dulcet - Music Player
@author			Harish B
@createdOn		28-11-2024
@modifiedOn		-
@reviewedBy		-
@reviewedOn		-
*/

import java.util.ArrayList;
import java.util.List;

public class Song {
	private int songId;
	private String songName;
	private String artistName;
	private String albumName;
	private String playlistName;
	private String genre;
	private String duration;

    public Song(int songId, String songName, String artistName, String albumName, String playListName, String duration, String genre) {
        this.songId = songId;
        this.albumName = albumName;
        this.songName = songName;
    	this.artistName= artistName;
    	this.playlistName= playListName;
    	this.genre = genre;
    	this.duration= duration;      
    }

    @Override
    public String toString() {
    	return String.format(
                "%-5d %-30s %-25s %-20s %-20s %-15s %-8s",
                songId, songName, artistName, albumName, playlistName, genre, duration
        );
    }
    
    public static void main(String args[]) {
    	
    	List<Song> songs = new ArrayList<Song>();
    	
    	songs.add(new Song(1, "Nenjukkul Peidhidum", "Harris Jayaraj", "Vaaranam Aayiram", "Romantic Melodies", "Melody", "4:25"));
        songs.add(new Song(2, "Rowdy Baby", "Dhanush, Dhee", "Maari 2", "Dance Hits", "Folk", "4:42"));
        songs.add(new Song(3, "Why This Kolaveri Di", "Dhanush", "3", "Trending Hits", "Pop", "4:00"));
        songs.add(new Song(4, "Mersal Arasan", "A.R. Rahman", "Mersal", "Mass Hits", "Folk", "4:12"));
        songs.add(new Song(5, "Vaseegara", "Bombay Jayashri", "Minnale", "Evergreen Classics", "Melody", "5:02"));
        songs.add(new Song(6, "Anbe Sivam", "S.P. Balasubrahmanyam", "Anbe Sivam", "Inspirational Songs", "Devotional", "5:18"));
        songs.add(new Song(7, "Vaathi Coming", "Anirudh Ravichander", "Master", "Party Hits", "Folk", "3:50"));
        songs.add(new Song(8, "Aalaporan Thamizhan", "A.R. Rahman", "Mersal", "Patriotic Songs", "Folk", "5:47"));
        songs.add(new Song(9, "Munbe Vaa", "A.R. Rahman", "Sillunu Oru Kaadhal", "Romantic Melodies", "Melody", "5:20"));
        songs.add(new Song(10, "Kannaana Kanney", "D. Imman", "Viswasam", "Heartfelt Tunes", "Melody", "4:39"));
    }
}

