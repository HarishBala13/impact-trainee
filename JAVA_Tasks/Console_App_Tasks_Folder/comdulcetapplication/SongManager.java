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
import java.util.Scanner;

public class SongManager {
	
    private Scanner scanner = new Scanner(System.in);

    public void start() {
    	Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("1. View Songs\n2. Exit");
            int choice = scanner.nextInt();
            scanner.nextLine(); 

            switch (choice) {
                case 1:
                	getAllSongs();
                    break;
                case 2:
                	return;
                default:
                    System.out.println("Invalid option.");
            }
            scanner.close();
        }
    }
    

    private void getAllSongs() {
    	
    	 System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------");
         System.out.printf("| %-5s | %-30s | %-30s | %-30s | %-30s | %-20s | %-20s |%n", "Song_ID", "Song_Name", "Artist_Name", "Album_Name", "Playlist_Name", "Genre", "Duration");
         System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------");
    }
}
