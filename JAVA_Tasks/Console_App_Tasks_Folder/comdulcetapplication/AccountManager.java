package comdulcetapplication;

/*
@title			Dulcet - Music Player
@author			Harish B
@createdOn		28-11-2024
@modifiedOn		30-11-2024
@reviewedBy		-
@reviewedOn		-
*/

import java.util.Scanner;

public class AccountManager {
	
    AccountCreator accountCreator = new AccountCreator();
    AccountHandler accountHandler = new AccountHandler();
    private Scanner scanner = new Scanner(System.in);

    public boolean start() {
        System.out.println("\n1. Login\n2. Register\n3. Exit");
        int choice = scanner.nextInt();
        scanner.nextLine(); 

        switch (choice) {
            case 1:
                return accountHandler.loginUser();
            case 2:
            	accountCreator.registerUser();
                return start();
            case 3:
            	System.exit(0);
            default:
                System.out.println("Invalid option.");
                return start();
        }
    }
}
