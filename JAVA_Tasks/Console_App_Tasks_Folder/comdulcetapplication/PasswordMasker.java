package comdulcetapplication;

/*
@title			Dulcet - Music Player
@author			Harish B
@createdOn		28-11-2024
@modifiedOn		-
@reviewedBy		-
@reviewedOn		-
*/

import java.io.IOException;

public class PasswordMasker {

    // Method to read password with masking
    public static char[] readPassword() {
        StringBuilder password = new StringBuilder();
        try {
            while (true) {
                char ch = (char) System.in.read(); // Read a single character
                if (ch == '\n' || ch == '\r') { // End of input (Enter key)
                    break;
                }
                if (ch == '\b') { // Handle backspace
                    if (password.length() > 0) {
                        password.deleteCharAt(password.length() - 1); // Remove last char
                        System.out.print("\b \b"); // Move back and overwrite character
                    }
                } else {
                    System.out.print("*"); // Print asterisk for each character
                    password.append(ch); // Add character to password
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return password.toString().toCharArray(); // Convert password to char array and return
    }
}
