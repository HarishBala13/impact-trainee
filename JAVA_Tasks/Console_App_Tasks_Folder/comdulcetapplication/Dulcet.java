package comdulcetapplication;

/*
@title			Dulcet - Music Player
@author			Harish B
@createdOn		28-11-2024
@modifiedOn		-
@reviewedBy		-
@reviewedOn		-
*/

import java.sql.SQLException;

public class Dulcet {
	
	static boolean isApplicationExited = false;

	static void loadApplication(AccountManager accountManager) {
		
		AccountHandler accountHandler = new AccountHandler();
		// Loading the SQL Connection before the application starts
		try {
			SQL_Connector.getSqlClassConnection();	
			SQL_Connector.getSqlConnection();
		} 
		catch (ClassNotFoundException classNotFoundException) {
			classNotFoundException.printStackTrace();
		}
		 catch (SQLException sqlException) {
			sqlException.printStackTrace();
		}
		
		// Declaring loggedIn boolean to check the user
		 boolean isUserLoggedIn = accountManager.start();
	        
	    // If loggedIn returns true user is logged otherwise with a small refresh and next to the same page

	        if (isUserLoggedIn) {
	            System.out.println("Login successful! Enjoy our Music Player.");
	        } else if(!isUserLoggedIn) {
	        	accountHandler.loginUser();
//	        	loadApplication(accountManager, songManager);
//				try {
//	            	Thread.sleep(500);	
//				} catch (InterruptedException login_interrupted) {
//					Thread.currentThread().interrupt();
//					System.err.println("Login interrupted for the user with wrong credentials");
//				}
	            if(isApplicationExited) {	            	
	            	Dulcet.main(null);
	            }
	        }
	}

	public static void main(String[] args) {

		 // Create objects for the controller of Accounts
	        AccountManager userManager = new AccountManager();

		// Welcome page of the Application
		 	Welcome.showWelcomePage();
		 	
		// Loading animation for initializing of the application
	        LoadingAnimation.showLoading("Initializing Music Player...");

		// Starting application method call after the small loading
	        loadApplication(userManager);	    
	}
}

/**
 * 
    System.out.println("Exiting application.");
	Welcome.showExitMessage();
	    try {
	       	Thread.sleep(500);	
	       	isApplicationExited = false;
		} catch (InterruptedException app_interupted) {
			Thread.currentThread().interrupt();
			isApplicationExited = true;
			System.err.println("Application closing interrupted!"+app_interupted.getMessage());					
		}
 */