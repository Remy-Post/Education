import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Scanner;

public class Student {
    Scanner input;
    String name;
    int[] scores;
    int average;
    Character grade;

    public Student() {
        input = new Scanner(System.in);
    }

    //Set the name of the student
    public void  setName() {
        System.out.print("Enter student name: ");
        name = input.next();
    }

    //Set name if a name is provided already
    public void setName(String name){
        this.name = name;
    }

    public String getName (){
        return name;
    }

    //Set all the grades per course
    public void setScores() {
        System.out.print("\tEnter the number of scores for "+name.concat(": "));

        scores = new int[input.nextInt()];
        for (int i = 0; i < scores.length; i++) {
            System.out.print("\t\tEnter score "+(i+1)+": ");
            int score = input.nextInt();
            if (score < 0 || score > 100) {
                System.out.println("\t\t - Invalid score");
                i -= 1;
                continue;
            }
            scores[i] = score;
        }
    }

    public int[] getScores() {
        return scores;
    }

    //Calculates the average of the student
    public int setAverage() {
        int sum = 0;
        for (int score : scores) {
            sum += score;
        }
        average = sum / scores.length;
        return average;
    }

    public int getAverage() {
        return average;
    }

    //Calculates the grade of the student
    public void setGrade() {
        if (average < 60){
            grade = 'F';
        }
        else if (average < 70){
            grade = 'D';
        }
        else if (average < 80){
            grade = 'C';
        }
        else if (average < 90){
            grade = 'B';
        }
        else{
            grade = 'A';
        }
    }

    public Character getGrade() {
        return grade;
    }

    // Shows the Summary of the student
    public String getSum(){
        return "Student: " + name +", Average: " + average +", Grade: " + grade;
    }
}
