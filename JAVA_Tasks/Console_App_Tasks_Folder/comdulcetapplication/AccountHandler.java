package comdulcetapplication;

import java.util.Scanner;

/*
@title			Dulcet - Music Player
@author			Harish B
@createdOn		28-11-2024
@modifiedOn		-
@reviewedBy		-
@reviewedOn		-
*/

public class AccountHandler {
	
 public boolean loginUser() {
	 
	 Scanner scanner = null;
	 try {
		 scanner = new Scanner(System.in);
		 int maxAttempts = 3;
		 int userAttempts = 0;
		 boolean isUserLoggedIn = false;
		 
		 while(userAttempts < maxAttempts) {
			 System.out.print("Enter email: ");
		     String email = scanner.nextLine();

		     System.out.print("Enter password: ");
		     String password = scanner.nextLine();
//		     char[] password = PasswordMasker.readPassword();

		     isUserLoggedIn = SQL_Connector.retrieveUserFromDatabase(email, password);
		     if(isUserLoggedIn) {
		       return true;
		     }
		     else {
		       userAttempts++;
		       System.out.println("Incorrect credentials. Attempts remaining: " + (maxAttempts - userAttempts));
		    }
		 }
		 System.out.println("Too many failed attempts. Please try again later.");
		 return false;
	} 
	finally {
		if (scanner != null) {
	        scanner.close();
	    }
	}
	 
	  
 }
 public static void main(String[] args) { }
}
