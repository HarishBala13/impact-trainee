package comdulcetapplication;

import java.lang.System.Logger;

/*
@title			Dulcet - Music Player
@author			Harish B
@createdOn		29-11-2024
@modifiedOn		01-12-2024, 02-11-2024
@reviewedBy		-
@reviewedOn		-
*/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;

public class SQL_Connector {
	
	private static PreparedStatement preparedStatement = null;
	private static Connection connection = null;
	private static ResultSet resultSet = null;
	
	public static void getSqlClassConnection() throws ClassNotFoundException {
		try {
			Class.forName(ConfigLoader.getProperty("SQL_CLASSNAME"));
		} catch (ClassNotFoundException classNotFoundException) {
			classNotFoundException.printStackTrace();
		}		
	}
	
	public static Connection getSqlConnection() throws SQLException {
		
		return DriverManager.getConnection(
				ConfigLoader.getProperty("SQL_CONNECTOR"),
				ConfigLoader.getProperty("SQL_USERNAME"),
				ConfigLoader.getProperty("SQL_PASSWORD")
			);
		}
	
	public static PreparedStatement connectSqlPreparedStatement() throws SQLException {
	
		try {
			connection = getSqlConnection();
			preparedStatement = connection.prepareStatement(null);
		} catch (SQLException sqlException) {
			sqlException.printStackTrace();
		}
		return preparedStatement;		
	}
	
	public static void registerUsertoDatabase(String userName, String userMobileNumber, String userEmail, String userPassword) {
		
		// Creating randomId for the users
		Random random = new Random();
		int userId = random.nextInt(8999) + 1000;
		
		// Updating the date when the user is registering
		DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		LocalDateTime localDateTime = LocalDateTime.now();
		String userRegisteredDate = dateTimeFormatter.format(localDateTime);
		
		// Insert the values into SQL Database
		String  insertUserQuery = "insert into AccountCreator (userId, userName, userEmail, userMobileNumber, userPassword, registeredDate) values(?, ?, ?, ?, ?, ?)";
		
		try {
			
			preparedStatement = getSqlConnection().prepareStatement(insertUserQuery);
			
			preparedStatement.setInt(1, userId);
			preparedStatement.setString(2, userName);
			preparedStatement.setString(3, userEmail);
			preparedStatement.setString(4, userMobileNumber);
			preparedStatement.setString(5, userPassword);
			preparedStatement.setString(6, userRegisteredDate);
			
			int rowsInserted = preparedStatement.executeUpdate();
			
			if(rowsInserted > 0) {
				System.out.println("Account for "+userName+"has been registered successfully! Happy Listening Music");
				LoggerUtil.log("Account for "+userName+"has been registered successfully on "+ userRegisteredDate +" and loggedin to app.");
			}
			
		} catch (SQLException sqlException) {
			System.out.println("Error occured in inserting the entry of user "+userName+"\n"+"Error stated as: "+sqlException.getMessage());
			LoggerUtil.log("Error occured in inserting the entry of user "+userName+"\n"+"Error stated as: "+sqlException.getMessage());
		}
		
//		String userId = String.format("%04d", random.nextInt(10000));
		
	}
	
	public static boolean retrieveUserFromDatabase(String userEmail, String userPassword) {
		
		String selectUserQuery = "select * from AccountCreator where userEmail = ? and userPassword = ?";
		try {
			
			preparedStatement = getSqlConnection().prepareStatement(selectUserQuery);
			preparedStatement.setString(1, userEmail);
			preparedStatement.setString(2, userPassword);
			resultSet = preparedStatement.executeQuery();
			
			if(resultSet.next()) {
				  System.out.println(ConfigLoader.getProperty("GREEN_FONT")+"Login successful! \nWelcome, "+resultSet.getString("userName")+ConfigLoader.getProperty("RESET_BLACK_FONT"));
				  return true;
			}
			else {
//				System.out.println("Invalid email or password.");
				return false;
			}
			
		} catch (SQLException sqlException) {
			System.out.println("Error stated while retrieving user: "+sqlException.getMessage());
			return false;
		}
		
	}

	public static void main(String[] args) throws ClassNotFoundException, SQLException {}

}
