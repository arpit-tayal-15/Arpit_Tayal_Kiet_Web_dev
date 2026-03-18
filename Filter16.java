package streamapi;
import java.util.*;
class Student{
	private String name;
    private int marks;

    // Constructor
    public Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    // Getters
    public String getName() {
        return name;
    }

    public int getMarks() {
        return marks;
    }
}

public class Filter16 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Student> students = Arrays.asList(
	            new Student("Amit", 75),
	            new Student("Riya", 55),
	            new Student("Rahul", 65),
	            new Student("Sneha", 45),
	            new Student("Karan", 85)
	        );

	        // Using Stream API to filter students with marks > 60
	        students.stream()
	                .filter(s -> s.getMarks() > 60)
	                .forEach(s -> System.out.println(s.getName() + " - " + s.getMarks()));

	}

}
