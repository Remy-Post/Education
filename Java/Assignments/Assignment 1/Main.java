import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("How much student(s): ");
        int numberOfS;


        //Enters the amount of students 
        do{
            numberOfS = input.nextInt();
            if (numberOfS < 0 || numberOfS >= 500 ){
                System.out.println("Please enter a reasonable number between 0 and 50");
            }
        }while (numberOfS < 0 || numberOfS >= 50);

        System.out.print("\n");

        Student[] students = new Student[numberOfS];

        //Creates the student and gets all values
        for (int i = 0; i < students.length; i++) {
            students[i] = new Student();
            students[i].setName();
            students[i].setScores();
            students[i].setAverage();
            students[i].setGrade();

            System.out.print("\n");
        }

        System.out.print("\n");

        //Displays the summary of the student
        for (Student student : students) {
            System.out.println(student.getSum());
        }

    }
}