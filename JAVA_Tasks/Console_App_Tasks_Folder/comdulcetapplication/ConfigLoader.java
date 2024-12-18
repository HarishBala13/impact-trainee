package comdulcetapplication;

/*
@title			Dulcet - Music Player
@author			Harish B
@createdOn		29-11-2024
@modifiedOn		-
@reviewedBy		-
@reviewedOn		-
*/

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigLoader {
	
private static final Properties properties = new Properties();
	
	static {
		try(FileInputStream fileInputStream = new FileInputStream("config.properties")) {
			properties.load(fileInputStream);			
		} catch (FileNotFoundException fileNotFoundException) {
			fileNotFoundException.printStackTrace();
		} catch (IOException ioException) {
			ioException.printStackTrace();
		}
	}
	
	public static String getProperty(String key) {
		return properties.getProperty(key);
	}

}
