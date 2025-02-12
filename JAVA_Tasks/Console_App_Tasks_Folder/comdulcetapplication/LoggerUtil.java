package comdulcetapplication;

/*
@title			Dulcet - Music Player
@author			Harish B
@createdOn		28-11-2024
@modifiedOn		-
@reviewedBy		-
@reviewedOn		-
*/

import java.io.FileWriter;
import java.io.IOException;

public class LoggerUtil {
	
	private static final String LOG_FILE = "./dulcet-application.log";

    public static void log(String message) {
        try (FileWriter writer = new FileWriter(LOG_FILE, true)) { 
            writer.write(message + "\n");
            writer.flush(); 
        } catch (IOException e) {
            System.err.println("Error writing to log file: " + e.getMessage());
        }
    }
}
