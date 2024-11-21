// package com.practicejavacodes;
package JAVA_Tasks;

class Aspirians {
	public int employee_id;
	public String employee_name;
	public String employee_DOB;
	public String employee_DOJ;
	public void updateTimeSheet() {
		System.out.println("Every Aspirian should complete their works by EOD.");
	}
	public void accessEntry() {
		System.out.println("\tLogged in");
	}
	public void accessExit() {
		System.out.println("\tLogged out");		
	}
}

class Management extends Aspirians {
	public int management_id;
	public String management_name;
	private int batch_no;
	public void announcements() {
		System.out.println("Hi Team,\nManagement made a decision to work with BA despite the suroundings.");
	}
	public int getBatchNo() {
		return batch_no;
	}
	public void setBatchNo(int batch_no) {
		this.batch_no = batch_no;
	}
	public void updateTimeSheet(String records) {
//		perform some operation with records
		System.out.println("Records of the onboarding status have been updated for "+records+" by Management.");
	}
}

class TalentNurturing extends Management {
	public int tn_id;
	int batch_no = getBatchNo();
	String[] practices = {"Insurance, D&A, EI, Testing"};
	public String getFundamentalsStrong() {
		return "Ready with fundamentals.\n\n";
	}
	public void getOnboardStatus() {
		System.out.println("\nAs per the information we have planned to onboard "+batch_no+" in the month of November.\n\nAfter onboaded ---\n\nYour are assigned into the following practices -->\n");
		for(int i=0; i<practices.length; i++) {
			System.out.print(practices[i]+", \t");
		}
		System.out.println();
	}
	public void updateTimeSheet(String records) {
//		perform some operation with records
		System.out.println("Records of the onboarding status have been updated for "+records+" by TN Team.");
	}
}

public class Organization {

	public static void main(String[] args) {
		
		TalentNurturing talentnurturing = new TalentNurturing();
		talentnurturing.batch_no = 2023;
		talentnurturing.announcements();
		talentnurturing.getOnboardStatus();
		System.out.println("After getting access card you must follow these two rules:-");
		talentnurturing.accessEntry();
		talentnurturing.accessExit();
		System.out.print("After some bit of brush up technologies now the trainees are "+talentnurturing.getFundamentalsStrong());
		System.out.println("List of Timesheet measures followed as per company guidelines:");
		talentnurturing.updateTimeSheet();
		Management management = new Management();
		management.updateTimeSheet("Jun-Nov 2023");
		talentnurturing.updateTimeSheet("Jun-Nov 2023");
		

	}

}
