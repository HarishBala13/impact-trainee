package comdulcetapplication;

/*
@title			Dulcet - Music Player
@author			Harish B
@createdOn		28-11-2024
@modifiedOn		02-12-2024
@reviewedBy		-
@reviewedOn		-
*/

import java.util.Scanner;
import java.util.regex.Pattern;

public class AccountCreator {

	public void registerUser() {
		
		Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to Dulcet Account Registration");

        String name = getValidatedInput(
        		scanner, 
        		"Enter your Name (Only letters allowed): ",
                "^[A-Za-z ]{3,30}$", 
                "Invalid Name. Must be 3-30 alphabetic characters."
               );

        String email = getValidatedInput(
        		scanner, 
        		"Enter your Email: ",
                "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$", 
                "Invalid Email format."
                );

        String password = getValidatedInput(
        		scanner, 
        		"Enter your Password (8-12 characters, must include one uppercase, one special character, one lowercase, and one number): ",
                "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", 
                "Invalid Password. Must meet the criteria."
                );

        String confirmPassword;
        do {
            confirmPassword = getValidatedInput(
            		scanner, 
            		"Confirm your Password: ",
                    ".*", 
                    "Invalid Confirmation."
                    );
            if (!confirmPassword.equals(password)) {
                System.out.println("Passwords do not match. Please try again.");
            }
        } while (!confirmPassword.equals(password));

        String userMobileNumber = getValidatedInput(
        		scanner, 
        		"Enter your Phone Number (10 digits): ",
                "^[0-9]{10}$", 
                "Invalid Phone Number. Must be 10 digits."
                );       
        
        SQL_Connector.registerUsertoDatabase(name, userMobileNumber, email, confirmPassword);
		
	}

    private static String getValidatedInput(Scanner scanner, String prompt, String regex, String errorMessage) {
        String input;
        while (true) {
            System.out.print(prompt);
            input = scanner.nextLine();
            if (Pattern.matches(regex, input)) {
                break;
            } else {
                System.out.println(errorMessage);
            }
        }
        return input;
    }
}

